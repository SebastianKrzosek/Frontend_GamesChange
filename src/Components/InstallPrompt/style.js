import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #1f1e1b;
  color: white;
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 25px 25px 0 0;
  z-index: 3;
`;

export const Info = styled.p`
  padding-left: 10px;
  font-size: 16px;
  font-family: "Press Start 2P";
  color: #fff;
`;

export const Image = styled.img`
  width: 55px;
  padding: 5px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
