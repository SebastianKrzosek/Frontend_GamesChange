import React, { useState, useEffect } from "react";
import { Container, Wrapper, Text } from "./style";
import { useHistory } from "react-router-dom";

const LoginHeader = () => {
  const [token, setToken] = useState();
  let history = useHistory();

  useEffect(() => {
    let tok = localStorage.getItem("token");
    setToken(tok);
  }, []);

  return (
    <Container>
      {token ? (
        <Wrapper>
          <Text
            to="/"
            onClick={() => {
              localStorage.removeItem("token");
              setToken("");
              history.push("/");
            }}
          >
            Wyloguj
          </Text>
        </Wrapper>
      ) : (
        <Wrapper>
          <Text
            to="/register"
            onClick={() => {
              history.push("/register");
            }}
          >
            Rejestracja
          </Text>
          <Text
            to="/login"
            onClick={() => {
              history.push("/login");
            }}
          >
            Logowanie
          </Text>
        </Wrapper>
      )}
    </Container>
  );
};
export default LoginHeader;
