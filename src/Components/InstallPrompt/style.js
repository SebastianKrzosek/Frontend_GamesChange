import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Wrapper = styled.div`
  background-color: #1f1e1c;
  color: white;
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 100%;
  top: 0;
  width: 100%;
  border-radius: 0 0 25px 25px;
  z-index: 2;
`;

export const Info = styled.p`
  padding-left: 10px;
  font-size: calc(14px + 0.1vw);
  font-family: "Press Start 2P";
  color: #fff;

  ${breakpoint("md")`
    font-size: 16px;
  `}
`;

export const Image = styled.img`
  max-width: calc(35px + 1vw);
  padding: 5px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
