import React, { useState } from "react";
import {
  Container,
  RegisterContainer,
  TitleContainer,
  Text,
  TextWrapper,
  StyledLink,
  LoginText,
  Input,
  Button,
  WrongData,
} from "./style";
import NavigationBar from "../../Components/NavigationBar";
import { useHistory } from "react-router-dom";

const RegisterScreen = () => {
  let history = useHistory();
  //   let info;
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [info, setInfo] = useState("bledne dane. sprobuj uzyc innych.");
  const [status, setStatus] = useState("");

  const registerHandler = () => {
    try {
      if (login.length < 3) {
        setInfo("login jest zbyt krotki");
        throw info;
      }
      if (password.length < 5) {
        setInfo("haslo jest zbyt krotkie");
        throw info;
      }
      if (phone.length !== 9) {
        setInfo("telefon nie jest poprawny");
        throw info;
      }
      if (email !== "") {
        const regex = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );

        if (!regex.test(email)) {
          setInfo("Email nie jest poprawny");
          throw info;
        }
        if (city === "") {
          setInfo("Wprowadź lokalizacje ogłoszenia");
          throw info;
        }
      }

      fetch("http://localhost:8080/api/profile/register", {
        // fetch("https://gameschange.herokuapp.com/api/profile/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams({
          login: login,
          password: password,
          email: email,
          phone: phone,
          city: city,
        }),
      })
        .then((result) => result.json())
        .then((res) => {
          if (res.msg) {
            setInfo(res.msg);
            setStatus("wrong");
          } else {
            history.push("/login");
          }
        });
    } catch {
      setStatus("wrong");
    }
  };

  return (
    <Container>
      <RegisterContainer>
        <TitleContainer>
          <Text>GAMES CHANGE</Text>
        </TitleContainer>
        <div>
          <Input
            required
            type="text"
            name="login"
            placeholder="login"
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            required
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            required
            type="number"
            name="phone"
            placeholder="telefon"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            required
            type="email"
            name="email"
            placeholder="e-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            required
            type="text"
            name="miasto"
            placeholder="miasto"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div>
          <Button onClick={registerHandler}>Wyslij</Button>
        </div>

        <WrongData data={status}>
          <Text>{info}</Text>
        </WrongData>

        <TextWrapper>
          <Text>masz juz konto?</Text>
          <StyledLink
            to="/login"
            onClick={() => {
              history.push("/login");
            }}
          >
            <LoginText>zaloguj sie!</LoginText>
          </StyledLink>
        </TextWrapper>
      </RegisterContainer>

      <NavigationBar />
    </Container>
  );
};
export default RegisterScreen;
