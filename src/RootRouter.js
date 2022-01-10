import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/index";
import PostScreen from "./Screens/PostScreen/index";
import UserScreen from "./Screens/UserScreen/index";
import OtherScreen from "./Screens/OtherScreen/index";
import LoginScreen from "./Screens/LoginScreen";
const RootRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route path="/add" component={OtherScreen}></Route>
          <Route path="/login" component={LoginScreen} />
          <Route path="/post/:postid" component={PostScreen} />
          <Route path="/user/:userid" component={UserScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default RootRouter;
