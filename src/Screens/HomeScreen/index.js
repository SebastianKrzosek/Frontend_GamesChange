import React from "react";
import { Link } from "react-router-dom";
import { BackgroundContainer } from "./style";
import Header from "../../Components/Header/index";
import NavigationBar from "../../Components/NavigationBar";
import InstallPrompt from "../../Components/InstallPrompt/index";

const HomeScreen = () => {
  return (
    <div>
      {/* <Header /> */}
      <InstallPrompt></InstallPrompt>
      <BackgroundContainer>
        <div>
          <h1>hello world from the HomeScreen</h1>
          <h2>maybe do u wanna install app?</h2>
          <Link to="/other">Other</Link>
        </div>
        <NavigationBar />
      </BackgroundContainer>
    </div>
  );
};
export default HomeScreen;
