import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
const breakpoint = createBreakpoint(breakpoints);

export const AddPostContainer = styled.div`
  background-color: #fff6;
  width: 80%;
  display: block;
  text-align: center;
  justify-content: center;
  margin: 13px auto 50px auto;
  padding: 10px 20px 10px 20px;
  font-family: "Press Start 2P";
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 18px;
  ${breakpoint("sm")`
    font-size: 24px;
  `}
`;

export const InputWrapper = styled.div`
  display: block;
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
  width: 200px;
  margin-top: 10px;
  font-family: "Press Start 2P";

  ${breakpoint("sm")`
    width: 400px;
  `}
  &::placeholder {
    color: #333;
    transition: color 0.3s ease;
  }
`;

export const Select = styled.select`
  border: none;
  outline: none;
  width: 225px;
  margin-top: 10px;
  padding: 8px;
  border-radius: 3px;
  background-color: #f2f2f2;
  color: #333;
  font-family: "Press Start 2P";
  font-size: 12px;
  ${breakpoint("sm")`
    width: 400px;
    font-size: 14px;
  `}
`;

export const TextArea = styled.textarea`
  margin-top: 10px;
  width: 200px;
  height: 50px;
  padding: 8px;
  border-radius: 3px;
  resize: none;
  border: none;
  outline: none;
  background-color: #f2f2f2;
  color: #333;
  padding: 14px;
  font-family: "Press Start 2P";
  font-size: 12px;
  ${breakpoint("sm")`
    width:400px;
    font-size: 14px;
    height: 70px;
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
`;
