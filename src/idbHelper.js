import { openDB } from "idb";

const dbPromise = openDB("post-store", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("posts")) {
      db.createObjectStore("posts", { keyPath: "_id" });
    }
    if (!db.objectStoreNames.contains("sync-post")) {
      db.createObjectStore("sync-post", { keyPath: "id", autoIncrement: true });
    }
  },
});

export const WriteData = (st, data) => {
  return dbPromise.then((db) => {
    const tx = db.transaction(st, "readwrite");
    const store = tx.objectStore(st);
    store.put(data);
    return tx.done;
  });
};

export const ReadAllData = (st) => {
  return dbPromise.then((db) => {
    const tx = db.transaction(st, "readonly");
    const store = tx.objectStore(st);
    return store.getAll();
  });
};

export const ClearData = (st) => {
  return dbPromise.then((db) => {
    const tx = db.transaction(st, "readwrite");
    const store = tx.objectStore(st);
    store.clear();
    return tx.done;
  });
};

export const DeleteItemFromData = (st, id) => {
  return dbPromise
    .then((db) => {
      const tx = db.transaction(st, "readwrite");
      const store = tx.objectStore(st);
      store.delete(id);
      return tx.done;
    })
    .then(() => {
      console.log("[IndexedDB]: ITEM DELETED");
    });
};
