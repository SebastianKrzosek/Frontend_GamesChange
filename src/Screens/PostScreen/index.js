import React, { useState, useEffect } from "react";
import NavigationBar from "../../Components/NavigationBar";
import {
  BackgroundContainer,
  PostContainer,
  Title,
  TitleContainer,
  DateWrapper,
  TimeAndPlace,
  Image,
  ImageContainer,
  Description,
  InfoContainer,
  LeftContainer,
  RightContainer,
  ContactContainer,
  Contact,
  StyledLink,
  SmallerDescription,
  Header,
  HeadText,
} from "./style";

const PostScreen = (props) => {
  const [post, setPost] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api/posts/wall")
      .then((response) => response.json())
      .then((data) =>
        data.map((post) => {
          if (props.match.params.postid === post._id) setPost(post);
        })
      )
      .catch((err) => console.error(err));
  }, []);

  return post ? (
    <BackgroundContainer>
      {console.log(post)}
      <PostContainer>
        <div>
          <TitleContainer>
            <Title>{post.title}</Title>
          </TitleContainer>
          <Header>
            <HeadText>{post.type}</HeadText>
          </Header>
          <InfoContainer>
            <LeftContainer>
              <ImageContainer>
                {post.photo ? (
                  <Image
                    src={
                      "http://localhost:8080/" + post.photo.replace(/\\/g, "/")
                    }
                    alt=""
                  ></Image>
                ) : null}
              </ImageContainer>
            </LeftContainer>
            <RightContainer>
              {post.description.lenght < 300 ? (
                <Description>{post.description}</Description>
              ) : (
                <SmallerDescription>{post.description}</SmallerDescription>
              )}

              <ContactContainer>
                <Contact>Kontakt:</Contact>
                <StyledLink to={`/user/${post.author_id}`}>
                  <Contact>{post.email}</Contact>
                  <Contact>{post.phone}</Contact>
                </StyledLink>
              </ContactContainer>
            </RightContainer>
            <DateWrapper>
              <TimeAndPlace>
                {post.date.replace(/-/g, " ").slice(0, 10)}
              </TimeAndPlace>
              <TimeAndPlace>{post.city}</TimeAndPlace>
            </DateWrapper>
          </InfoContainer>
        </div>
      </PostContainer>

      <NavigationBar active="Home" />
    </BackgroundContainer>
  ) : null;
};

export default PostScreen;
