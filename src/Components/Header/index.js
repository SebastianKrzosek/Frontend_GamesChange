import React from "react";
import { Nav, List, ListElement, LogoImage } from "./style";
import GameBoy from "../../Images/game-boy.png";

const Header = () => {
  return (
    <Nav>
      <div>
        <LogoImage src={GameBoy}></LogoImage>
      </div>
      <List>
        <ListElement>Home</ListElement>
        <ListElement>Other</ListElement>
      </List>
    </Nav>
  );
};

export default Header;
