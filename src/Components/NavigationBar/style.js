import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
import { Link } from "react-router-dom";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
const breakpoint = createBreakpoint(breakpoints);

export const Wrapper = styled.div`
  background-color: #1f1e1c;
  color: white;
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-width: 300px;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 25px 25px 0 0;
  z-index: 2;
`;

export const HomeLinkWrapper = styled.div`
  text-align: center;
  opacity: ${(props) => (props.active === "Home" ? 1 : 0.5)};
  &:hover {
    opacity: 1;
  }
`;
export const AddLinkWrapper = styled.div`
  text-align: center;
  opacity: ${(props) => (props.active === "Add" ? 1 : 0.5)};
  &:hover {
    opacity: 1;
  }
`;

export const Links = styled(Link)`
  font-family: "Press Start 2P";
  font-size: 11px;
  text-decoration: none;
  color: white;

  ${breakpoint("sm")`
    font-size: 14px;
  `}
`;

export const LinkText = styled.p`
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
`;

export const LogoImage = styled.img`
  margin-top: 10px;
  width: 17px;
  margin-bottom: 0;

  ${breakpoint("sm")`
    width: 24px;
  `}
`;
