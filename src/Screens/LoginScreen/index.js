import React, { useState } from "react";
import {
  Container,
  LoginContainer,
  Input,
  Button,
  Text,
  TextWrapper,
  StyledLink,
  RegisterText,
  WrongPassword,
  TitleContainer,
} from "./style";
import NavigationBar from "../../Components/NavigationBar/index";
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  let history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  let error;

  const loginHandler = () => {
    try {
      if (login.length < 3 || login === "") {
        error = "niepoprawny login lub haslo";
        setInfo("wrong");
        throw error;
      }
      if (password.length < 3 || password === "") {
        error = "niepoprawny login lub haslo";
        setInfo("wrong");
        throw error;
      }

      fetch("http://localhost:8080/api/profile/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams({
          login: login,
          password: password,
        }),
      })
        .then((result) => result.json())
        .then((res) => {
          if (res.success) {
            localStorage.removeItem("token");
            localStorage.setItem("token", res.token);
            window.dispatchEvent(new Event("storage"));
            history.push("/");
          }
        });
    } catch {
      console.error(error);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <TitleContainer>
          <Text>GAMES CHANGE</Text>
        </TitleContainer>

        <Input
          required
          type="text"
          name="login"
          placeholder="login"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        ></Input>
        <Input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <div>
          <Button onClick={loginHandler}>zaloguj</Button>
        </div>
        <WrongPassword pass={info}>
          <Text>bledny login lub haslo</Text>
        </WrongPassword>

        <TextWrapper>
          <Text>nie masz jeszcze konta?</Text>
          <StyledLink
            to="/register"
            onClick={() => {
              history.push("/register");
            }}
          >
            <RegisterText>zarejestruj sie!</RegisterText>
          </StyledLink>
        </TextWrapper>
      </LoginContainer>
      <NavigationBar />
    </Container>
  );
};

export default LoginScreen;
