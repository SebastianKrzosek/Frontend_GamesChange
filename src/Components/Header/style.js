import styled from "styled-components";

export const Nav = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  position: fixed;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background-color: #1f1e1b;
  color: white;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

export const ListElement = styled.li`
  margin-left: 20px;
  font-size: 20px;
  font-family: "Press Start 2P";
`;

export const LogoImage = styled.img`
  max-width: 60px;
  margin: 5px;
`;
