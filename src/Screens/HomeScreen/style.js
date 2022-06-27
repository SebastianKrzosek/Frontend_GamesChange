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

export const BackgroundContainer = styled.div`
  background-color: #042430ee;
  overflow: hidden;
`;

export const SmallPostsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  padding: 20px 0px 50px 0px;
  margin-bottom: 50px;
`;

export const SmallPostWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

export const HeaderContainer = styled.div`
  background-color: #1f1e1c;
  padding: 5px 10px;
  width: 100%;
  display: grid;
  position: relative;
  text-align: center;

  ${breakpoint("md")`
    display: flex;
  `}
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 5px;
  color: white;
  font-family: "Press Start 2P";
`;

export const Image = styled.img`
  max-width: calc(35px + 1vw);
  padding: 5px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
export const InputWrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0 30px;
  ${breakpoint("md")`
    margin:0;
  `}
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
  width: 175px;
  height: 10px;
  font-family: "Press Start 2P";

  ${breakpoint("sm")`
    width: 250px;
  `}
  &::placeholder {
    color: #333;
    transition: color 0.3s ease;
  }
`;
