import React from "react";
import {
  Wrapper,
  Links,
  LogoImage,
  HomeLinkWrapper,
  AddLinkWrapper,
  LinkText,
} from "./style";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import HomeIcon from "../../Images/home.png";
import PlusIcon from "../../Images/plus.png";

const NavigationBar = (props) => {
  let history = useHistory();

  return (
    <Wrapper>
      <Router>
        <HomeLinkWrapper active={props.active}>
          <Links
            to={"/"}
            onClick={() => {
              history.push("/");
            }}
          >
            <LogoImage src={HomeIcon}></LogoImage>
            <LinkText>Home</LinkText>
          </Links>
        </HomeLinkWrapper>

        <AddLinkWrapper active={props.active}>
          <Links
            to={"/add"}
            onClick={() => {
              history.push("/add");
            }}
          >
            <LogoImage src={PlusIcon}></LogoImage>
            <LinkText>Add</LinkText>
          </Links>
        </AddLinkWrapper>
      </Router>
    </Wrapper>
  );
};
export default NavigationBar;
