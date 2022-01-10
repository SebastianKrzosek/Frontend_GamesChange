import React from "react";
import { Container, Text } from "./style";
import { useHistory } from "react-router-dom";

const LoginHeader = () => {
  let history = useHistory();
  return (
    <Container>
      <Text
        to="/login"
        onClick={() => {
          history.push("/login");
        }}
      >
        register
      </Text>
      <Text
        to="/login"
        onClick={() => {
          history.push("/login");
        }}
      >
        login
      </Text>
    </Container>
  );
};
export default LoginHeader;
