import React, { useState, useEffect } from "react";
import {
  BackgroundContainer,
  SmallPostsContainer,
  SmallPostWrapper,
} from "./style";
import LoginHeader from "../../Components/LoginHeader";
import NavigationBar from "../../Components/NavigationBar";
import SmallPost from "../../Components/SmallPost";

const HomeScreen = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api/posts/wall")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <BackgroundContainer>
      <LoginHeader />
      <SmallPostsContainer>
        {posts &&
          posts.map((post) => {
            return (
              <SmallPostWrapper>
                <SmallPost key={post._id} props={post} />
              </SmallPostWrapper>
            );
          })}
      </SmallPostsContainer>
      <NavigationBar active="Home" />
    </BackgroundContainer>
  );
};
export default HomeScreen;
