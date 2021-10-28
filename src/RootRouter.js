import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/index";
import OtherScreen from "./Screens/OtherScreen/index";
const RootRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route path="/other" component={OtherScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default RootRouter;
