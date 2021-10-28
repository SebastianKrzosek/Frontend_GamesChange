import React from "react";
import { Link } from "react-router-dom";

const OtherScreen = () => {
  return (
    <div>
      <h1>I am other</h1>
      <h2>Say hello</h2>
      <Link to="/">Wróć</Link>
    </div>
  );
};

export default OtherScreen;
