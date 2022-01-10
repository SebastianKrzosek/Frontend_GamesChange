import React from "react";
import {
  DateWrapper,
  Image,
  ImageContainer,
  InfoContainer,
  SmallPostContainer,
  StyledLink,
  TimeAndPlace,
  Title,
} from "./style";
import { useHistory } from "react-router-dom";

const SmallPost = (props) => {
  let history = useHistory();
  let path;
  if (props.props.photo) {
    path = "http://localhost:8080/" + props.props.photo.replace(/\\/g, "/");
  }

  return (
    <StyledLink
      to={`/post/${props.props._id}`}
      onClick={() => {
        history.push(`/post/${props.props._id}`);
      }}
    >
      <SmallPostContainer>
        <ImageContainer>
          {props.props.photo ? <Image src={path} alt=""></Image> : null}
        </ImageContainer>

        <InfoContainer>
          <DateWrapper>
            <TimeAndPlace>
              {props.props.date.replace(/-/g, " ").slice(0, 10)}
            </TimeAndPlace>
            <TimeAndPlace>{props.props.city}</TimeAndPlace>
          </DateWrapper>
          <Title style={{ margin: "0" }}>
            {props.props.title}{" "}
            <p style={{ margin: "0", fontSize: "18px" }}>{props.props.type}</p>
          </Title>
          <p style={{ margin: "0" }}>
            {props.props.description.split(".").slice(0, 2) + "..."}
          </p>
        </InfoContainer>
      </SmallPostContainer>
    </StyledLink>
  );
};
export default SmallPost;
