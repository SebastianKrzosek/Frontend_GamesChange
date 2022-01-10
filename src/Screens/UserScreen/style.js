import styled from "styled-components";
import BackgroundImage from "../../Images/background.jpg";
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
const breakpoint = createBreakpoint(breakpoints);

export const BackgroundContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: 160vh;
  width: 100%;
  bottom: 0;
  top: 0;
  display: grid;
  position: fixed;
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
export const UserInfoContainer = styled.div`
  position: relative;
  display: grid;
  text-align: center;
  background-color: #0007;
  border-radius: 25px;
  width: 80%;
  margin: 10px auto;
  min-width: 340px;
`;

export const UserInfoWrapper = styled.div`
  display: grid;
  justify-content: center;

  ${breakpoint("md")`
    display: flex`};
`;

export const LeftInfo = styled.div`
  float: left;
  width: 100%;
  padding: 10px;
  padding-bottom: 0px;
  ${breakpoint("md")`
  padding-bottom: 10px;
  width: 50%`};
`;

export const RightInfo = styled.div`
  float: right;
  width: 100%;
  padding: 10px;
  padding-top: 0px;
  ${breakpoint("md")`
  padding-top: 10px;
  width: 50%`}
`;

export const UserInfo = styled.p`
  font-family: "Press Start 2P";
  font-size: 18px;
  padding: 2px;
  color: white;
  margin: 0;
`;
