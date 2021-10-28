import React from "react";
import ReactGA from "react-ga";
import RootRouter from "./RootRouter";
import { Router } from "react-router";
import rootHistory from "./RootHistory";
import HomeScreen from "./Screens/HomeScreen";
import InitialScreen from "./Screens/InitialScreen";

function App() {
  rootHistory.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return (
    <Router history={rootHistory}>
      <RootRouter></RootRouter>
    </Router>
  );
}

export default App;
