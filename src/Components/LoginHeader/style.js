import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  display: flex;
  margin: 0;
  margin-right: 25px;
  right: 0;
  top: 0;
`;

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
