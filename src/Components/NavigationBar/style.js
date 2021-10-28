import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #1f1e1b;
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

export const NavLink = styled(Link)`
  font-family: "Press Start 2P";
  text-decoration: none;
  color: white;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  /* opacity: 0.6; */
  &:hover {
    opacity: 1;
  }
`;
