import React, { useState, useEffect } from "react";
import {
  BackgroundContainer,
  LeftInfo,
  RightInfo,
  SmallPostsContainer,
  SmallPostWrapper,
  UserInfo,
  UserInfoContainer,
  UserInfoWrapper,
} from "./style";
import NavigationBar from "../../Components/NavigationBar";
import SmallPost from "../../Components/SmallPost";
const UserScreen = (props) => {
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState();
  let tempArr = [];

  useEffect(() => {
    getPosts();
    getUser();
  }, []);

  const getPosts = async () => {
    await fetch("http://localhost:8080/api/posts/wall")
      .then((response) => response.json())
      .then((data) => {
        data.map((el) => {
          if (el.author_id === props.match.params.userid) {
            tempArr.push(el);
          }
        });
        setUserPosts(tempArr);
      })
      .catch((err) => console.error(err));
  };

  const getUser = async () => {
    let dataFromWeb = false;
    await fetch(
      `http://localhost:8080/api/profile/:${props.match.params.userid}`
    )
      .then((response) => response.json())
      .then((data) => {
        dataFromWeb = true;
        console.log("from web", data);
        setUser(data);
      })
      .catch((err) => console.error(err));

    if ("caches" in window) {
      window.caches
        .match("http://localhost:8080/api/posts/wall")
        .then((response) => response.json())
        .then((data) => {
          if (!dataFromWeb) {
            console.log("from cache", data);
            setUser(data);
          }
        });
    }
  };

  return (
    <BackgroundContainer>
      <SmallPostsContainer>
        {user &&
        user.profile !== "Nie ma użytkownika o takim identyfikatorze" ? (
          <UserInfoContainer>
            <UserInfoWrapper>
              <LeftInfo>
                <UserInfo>{user.login}</UserInfo>
                <UserInfo>{user.city}</UserInfo>
              </LeftInfo>
              <RightInfo>
                <UserInfo>{user.email}</UserInfo>
                <UserInfo>{user.phone}</UserInfo>
              </RightInfo>
            </UserInfoWrapper>
          </UserInfoContainer>
        ) : null}
        {userPosts &&
          userPosts.map((post) => {
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

export default UserScreen;
