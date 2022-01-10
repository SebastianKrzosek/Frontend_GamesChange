import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { createBreakpoint } from "styled-components-breakpoint";
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
const breakpoint = createBreakpoint(breakpoints);

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  background-color: #042430ee;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 30%;
  min-width: 300px;
  height: 50%;
  border-radius: 25px;

  justify-content: center;
  text-align: center;
  background-color: #3737378f;
  box-shadow: 5px 5px 5px black;
`;

export const TitleContainer = styled.div`
  margin: 10px;
  padding: 10px;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 20px;
  font-family: "Press Start 2P";
`;

export const Input = styled.input`
  border: none;
  outline: none;
  --webkit-appearance: none;
  --ms-appearance: none;
  --moz-appearance: none;
  appearance: none;
  background-color: #f2f2f2;
  color: #333;
  padding: 14px;
  border-radius: 3px;
  width: 150px;
  margin-top: 10px;
  font-family: "Press Start 2P";

  ${breakpoint("sm")`
    width: 225px;
  `}

  &::placeholder {
    color: #333;
    transition: color 0.3s ease;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 7px 20px;
  border-radius: 3px;
  color: #333;
  font-family: "Press Start 2P";
  &:hover,
  :focus {
    opacity: 0.7;
  }
`;

export const TextWrapper = styled.div`
  margin: 10px;
  font-size: 14px;
  padding: 5px;
  gap: 2px;
`;

export const Text = styled.p`
  margin: 4px;
  font-family: "Press Start 2P";
`;

export const RegisterText = styled.p`
  margin: 4px;
  font-size: 14px;
  font-family: "Press Start 2P";
  &:hover,
  :focus {
    opacity: 0.7;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const WrongPassword = styled.div`
  font-size: 14px;
  color: #f00;
  ${(props) => {
    console.log(props.pass);
    switch (props.pass) {
      case "wrong":
        return css`
          margin-top: 15px;
          display: grid;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;
