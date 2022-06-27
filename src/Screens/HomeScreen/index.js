import React, { useState, useEffect } from "react";
import {
  BackgroundContainer,
  SmallPostsContainer,
  SmallPostWrapper,
  HeaderContainer,
  Title,
  Input,
  InputWrapper,
} from "./style";
import ChestIcon from "../../Images/chest.png";
import Example from "../../Components/InstallPrompt";
import LoginHeader from "../../Components/LoginHeader";
import NavigationBar from "../../Components/NavigationBar";
import SmallPost from "../../Components/SmallPost";
import { ReadAllData } from "../../idbHelper";

const HomeScreen = () => {
  const [posts, setPosts] = useState();
  const [title, setTitle] = useState("");

  useEffect(() => {
    let count = localStorage.getItem("PostsCount");
    if (count) {
      console.log("licznik:", count);
    }
    let dataFromWeb = false;
    // fetch("https://gameschange.herokuapp.com/api/posts/wall")
    fetch("http://localhost:8080/api/posts/wall")
      .then((response) => response.json())
      .then((data) => {
        dataFromWeb = true;
        console.log("from web", data);
        setPosts(data);
        if (count != data.length) {
          const options = {
            body: "W aplikacji GamesChange znalazły się nowe ogłoszenia!",
            icon: ChestIcon,
            vibrate: [100, 50, 200],
            tag: "new-post-notification",
            renotify: true,
          };
          navigator.serviceWorker.ready.then((swreg) => {
            swreg.showNotification("GamesChange: Nowe ogłoszenia!", options);
          });
          localStorage.setItem("PostsCount", data.length);
        }
      })
      .catch((err) => console.error(err));

    if ("indexedDB" in window) {
      ReadAllData("posts").then((data) => {
        if (!dataFromWeb) {
          console.log("from idb:", data);
          setPosts(data);
        }
      });
    }

    if ("Notification" in window) {
      Notification.requestPermission((res) => {
        if (res !== "granted") {
          console.log("Notification status: ", res);
        } else {
          console.log("Notification status: ", res);
        }
      });
    }

    // if ("caches" in window) {
    //   window.caches
    //     .match("http://localhost:8080/api/posts/wall")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (!dataFromWeb) {
    //         console.log("from cache", data);
    //         setPosts(data);
    //       }
    //     });
    // }
  }, []);

  return (
    <BackgroundContainer>
      <div style={{ width: "100vw", overflow: "hidden" }}>
        <HeaderContainer>
          <Example></Example>
          <InputWrapper>
            <Input
              type="text"
              name="title"
              placeholder="Wyszukaj"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </InputWrapper>
          <LoginHeader />
        </HeaderContainer>

        <SmallPostsContainer>
          {posts &&
            posts.map((post) => {
              if (title.length > 3) {
                if (post.title.toLowerCase().includes(title.toLowerCase())) {
                  return (
                    <SmallPostWrapper>
                      <SmallPost key={post._id} props={post} />
                    </SmallPostWrapper>
                  );
                }
              } else {
                return (
                  <SmallPostWrapper>
                    <SmallPost key={post._id} props={post} />
                  </SmallPostWrapper>
                );
              }
            })}
        </SmallPostsContainer>
        <NavigationBar active="Home" />
      </div>
    </BackgroundContainer>
  );
};
export default HomeScreen;
