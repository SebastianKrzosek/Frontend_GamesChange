/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import axios from "axios";
import { openDB } from "idb";
import {
  WriteData,
  ClearData,
  ReadAllData,
  DeleteItemFromData,
} from "./idbHelper";

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith("/_")) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".png"), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.
// self.importScripts("./idbHelper.js");
const CACHE_STATIC_NAME = "static-v8";
const CACHE_DYNAMIC_NAME = "dynamic-v3";
var STATIC_FILES = [
  "/",
  "/public/index.html",
  "/public/fonts/font.css",
  "/src/App.js",
  "/src/App.css",
  "/src/index.js",
  "/src/index.css",
  "/src/RootRouter.js",
  "/src/Screens/HomeScreen/index.js",
  "/src/Screens/HomeScreen/style.js",
  "/src/Screens/OfflineScreen/index.js",
  "/src/Screens/OfflineScreen/style.js",
  "/src/Screens/InitialScreen/index.js",
  "/src/Screens/LoginScreen/index.js",
  "/src/Screens/LoginScreen/style.js",
  "/src/Screens/OtherScreen/index.js",
  "/src/Screens/OtherScreen/style.js",
  "/src/Screens/PostScreen/index.js",
  "/src/Screens/PostScreen/style.js",
  "/src/Screens/RegisterScreen/index.js",
  "/src/Screens/RegisterScreen/style.js",
  "/src/Screens/UserScreen/index.js",
  "/src/Screens/UserScreen/style.js",
  "/src/idbHelper.js",
];

self.addEventListener("install", (event) => {
  console.log("[Service Worker] - installing service worker: ", event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      console.log("[Service Worker] - Precach open");
      cache.addAll(STATIC_FILES);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] activating service worker... ", event);
  ClearData("posts");
  // event.waitUntil(
  //   caches.keys().then((keyList) => {
  //     return Promise.all(
  //       keyList.map((key) => {
  //         if (
  //           key !== CACHE_STATIC_NAME &&
  //           key !== CACHE_DYNAMIC_NAME &&
  //           key !== "workbox-precache-v2"
  //         ) {
  //           caches.delete(key);
  //         }
  //       })
  //     );
  //   })
  // );
  return clientsClaim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(function (res) {
            const cloneRes = res.clone();
            cloneRes
              .json()
              .then((data) => {
                for (let key in data) {
                  if (typeof key != String) {
                    WriteData("posts", data[key]);
                  }
                }
              })
              .catch((err) =>
                console.error("[IndexedDB] Add to IndexedDB", err)
              );
            return res;
          })
          .catch((err) => {
            caches.open(CACHE_STATIC_NAME).then((cache) => {
              if (event.request.headers.get("accept").includes("text/html")) {
                return cache.match("/src/Screens/OfflineScreen/index.js");
              }
            });
          });
      }
    })
  );
});

self.addEventListener("sync", (event) => {
  console.log("[Service Worker]: start sync proces", event);
  if (event.tag === "sync-new-post") {
    event.waitUntil(
      ReadAllData("sync-post").then((data) => {
        for (let dt of data) {
          const fd = new FormData();
          fd.append("type", dt.type);
          fd.append("title", dt.title);
          fd.append("description", dt.description);
          fd.append("photo", dt.photo, dt.photo.name);
          fd.append("phone", dt.phone);
          fd.append("email", dt.email);
          fd.append("city", dt.city);

          fetch(`http://localhost:8080/api/posts/addguest`, {
            method: "post",
            body: fd,
          })
            .then((res) => {
              console.log("post zostal dodany ", res.data);
              if (res.ok) {
                DeleteItemFromData("sync-post", dt.id);
              }
            })
            .catch((err) => {
              console.error("[Error]: Service Worker sync event:", err);
            });
        }
      })
    );
  }
});

// without idb //
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response;
//       } else {
//         return fetch(event.request)
//           .then(function (res) {
//             return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
//               cache.put(event.request.url, res.clone());
//               return res;
//             });
//           })
//           .catch((err) => {
//             caches.open(CACHE_STATIC_NAME).then((cache) => {
//               if (event.request.headers.get("accept").includes("text/html")) {
//                 return cache.match("/src/Screens/OfflineScreen/index.js");
//               }
//             });
//           });
//       }
//     })
//   );
// });
