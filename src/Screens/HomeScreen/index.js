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
import Example from "../../Components/InstallPrompt";
import LoginHeader from "../../Components/LoginHeader";
import NavigationBar from "../../Components/NavigationBar";
import SmallPost from "../../Components/SmallPost";
import { ReadAllData } from "../../idbHelper";

const HomeScreen = () => {
  const [posts, setPosts] = useState();
  const [title, setTitle] = useState("");

  useEffect(() => {
    let dataFromWeb = false;
    fetch("http://localhost:8080/api/posts/wall")
      .then((response) => response.json())
      .then((data) => {
        dataFromWeb = true;
        console.log("from web", data);
        setPosts(data);
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
