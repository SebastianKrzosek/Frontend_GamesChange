import styled from "styled-components";
import BackgroundImage from "../../Images/background.jpg";

export const BackgroundContainer = styled.div`
  position: relative;
  background-image: url(${BackgroundImage});
  background-size: 160vh;
  width: 100%;
  bottom: 0;
  top: 0;
  display: flex;
  position: fixed;
  /* text-align: center; */
  /* justify-content: center; */
  /* align-items: center; */
  &::-webkit-slider-thumb {
    display: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SmallPostsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  margin-bottom: 50px;
`;

export const SmallPostWrapper = styled.div`
  width: 80%;
  margin: auto;
`;
