import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/index";
import PostScreen from "./Screens/PostScreen/index";
import UserScreen from "./Screens/UserScreen/index";
import OtherScreen from "./Screens/OtherScreen/index";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import OfflineScreen from "./Screens/OfflineScreen";
const RootRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route path="/add" component={OtherScreen}></Route>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/post/:postid" component={PostScreen} />
          <Route path="/user/:userid" component={UserScreen} />
          <Route path="/offline" component={OfflineScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default RootRouter;
