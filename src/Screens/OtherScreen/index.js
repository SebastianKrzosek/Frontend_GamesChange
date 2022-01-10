import React from "react";
import { BackgroundContainer } from "../HomeScreen/style";
import NavigationBar from "../../Components/NavigationBar";
import AddGuestPost from "../../Components/AddGuestPost";
const OtherScreen = () => {
  return (
    <BackgroundContainer>
      <AddGuestPost></AddGuestPost>
      <NavigationBar active="Add" />
    </BackgroundContainer>
  );
};

export default OtherScreen;
