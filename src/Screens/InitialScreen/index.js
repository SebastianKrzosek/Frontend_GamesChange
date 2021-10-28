import React from "react";
import { useHistory } from "react-router-dom";

const InitialScreen = () => {
  let history = useHistory();

  return (
    <div>
      {setInterval(() => {
        history.push("/");
      }, 500)}
    </div>
  );
};
export default InitialScreen;
