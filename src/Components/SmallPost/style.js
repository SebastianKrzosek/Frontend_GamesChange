import styled from "styled-components";
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const SmallPostContainer = styled.section`
  max-width: 800px;
  width: 85%;
  display: grid;
  text-align: center;
  justify-content: space-around;

  border: 3px solid white;
  padding: 5px 20px;
  border-radius: 25px;
  margin: 3px auto;
  background-color: #a9a9a999;
  box-shadow: 15px 15px 15px black;
  ${breakpoint("md")`
      display: flex;
  `};
  &:hover,
  :focus {
    opacity: 0.8;
  }
`;
export const InfoContainer = styled.section`
  position: relative;
  display: grid;
  text-align: center;
  justify-content: center;
  width: 70%;
  float: right;
  color: white;
  margin: auto;

  ${breakpoint("md")`
      display: grid;
      margin: 0;
  `}
`;

export const ImageContainer = styled.section`
  width: 30%;
  height: 100%;
  float: left;
  display: grid;
  justify-content: center;
  margin: auto;

  ${breakpoint("md")`
      display: flex;
      justify-content: center;
      margin: 0;
  `}
`;

export const Image = styled.img`
  width: 15vw;
  height: 15vw;
  min-width: 100px;
  max-width: 200px;
  min-height: 100px;
  max-height: 200px;
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;
`;

export const DateWrapper = styled.div`
  position: absolute;
  margin: 0;
  right: 0;
  top: 0;
`;

export const TimeAndPlace = styled.p`
  margin: 0;
  display: none;
  justify-content: center;
  ${breakpoint("md")`
    display: flex;
  `}
`;

export const Title = styled.h2`
  margin: 0;
  text-shadow: 5px 5px 4px black;
`;
