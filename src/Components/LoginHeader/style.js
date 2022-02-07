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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoint("md")`
    margin: 0 0 0 auto;
  padding-right: 70px;
  `}
`;

export const Wrapper = styled.div``;

export const Text = styled(Link)`
  text-decoration: none;
  font-family: "Press Start 2P";
  font-size: 10px;
  padding: 4px;
  color: white;

  &:hover,
  :focus {
    opacity: 0.8;
  }
`;
