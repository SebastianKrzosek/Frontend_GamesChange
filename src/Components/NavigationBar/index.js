import React from "react";
import { Wrapper, NavLink } from "./style";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

const NavigationBar = () => {
  let history = useHistory();

  return (
    <Wrapper>
      <Router>
        <NavLink
          to={"/"}
          active={false}
          onClick={() => {
            history.push("/");
          }}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to={"/other"}
          active={false}
          onClick={() => {
            history.push("/other");
          }}
        >
          <p>Other</p>
        </NavLink>
      </Router>
    </Wrapper>
  );
};
export default NavigationBar;
