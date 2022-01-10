import styled from "styled-components";
import BackgroundImage from "../../Images/background.jpg";

export const BackgroundContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: 160vh;
  width: 100%;
  bottom: 0;
  top: 0;
  display: flex;
  position: fixed;
`;
