import styled from "styled-components";
import BackgroundImage from "../../Images/background.jpg";
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

export const BackgroundContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: 160vh;
  width: 100%;
  bottom: 0;
  top: 0;
  display: flex;
  position: fixed;
`;

export const PostContainer = styled.div`
  position: relative;
  display: grid;
  background-color: #a9a9a999;
  box-shadow: 5px 5px 5px #a9a9a955;
  padding: 10px 20px;
  width: 80%;
  min-width: 80%;
  margin: 30px auto 100px auto;
  border-radius: 25px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  margin: 0;
`;
export const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 24px;
  text-shadow: 5px 5px 5px black;
  ${breakpoint("sm")`
    font-size: 32px;
  `};
`;

export const DateWrapper = styled.div`
  position: absolute;
  display: none;
  padding: 10px 15px;
  margin: 0;
  right: 0;
  top: 0;
  ${breakpoint("sm")`
    display:grid;
  `}
`;

export const TimeAndPlace = styled.p`
  margin: 0;
  display: none;
  justify-content: center;
  color: white;
  ${breakpoint("md")`
    display: flex;
  `}
`;

export const LeftContainer = styled.div`
  float: none;
  width: 100%;
  ${breakpoint("sm")`
    float: left;
    width: 50%
  `};
`;

export const RightContainer = styled.div`
  align-self: center;
  float: none;
  width: 100%;
  ${breakpoint("sm")`
    float: right;
    width: 50%;
    padding: 15px 0;
  `};
`;

export const ImageContainer = styled.section`
  width: 100%;
  height: 100%;
  float: left;
  display: grid;
  justify-content: center;
  margin: auto;
  padding: 15px 0px;

  ${breakpoint("md")`
      display: flex;
      justify-content: center;
      margin: 0;
  `}
`;

export const Image = styled.img`
  width: 40vw;
  height: 40vw;
  min-width: 150px;
  max-width: 300px;
  min-height: 150px;
  max-height: 300px;
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;

  @media (max-width: 320px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  display: grid;

  ${breakpoint("sm")`
    display: flex;
  `}
`;

export const Description = styled.p`
  word-wrap: break-word;
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 5px 10px;
  margin: 5px;

  ${breakpoint("sm")`
    padding: 15px 10px;
    font-size: 20px
  `}

  @media (max-width: 359px) {
    font-size: 16px;
  }
  @media (max-width: 270px) {
    font-size: 14px;
  }
`;

export const SmallerDescription = styled.p`
  word-wrap: break-word;
  color: white;
  text-align: center;
  font-size: 15px;
  padding: 5px 10px;
  margin: 5px;

  @media (max-width: 270px) {
    font-size: 13px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
  ${breakpoint("sm")`
    padding: 15px 10px;
    font-size: 17px
  `}
`;

export const ContactContainer = styled.div`
  background-color: #0008;
  width: 80%;
  min-width: 160px;
  border-radius: 25px;
  display: grid;
  justify-content: center;
  text-align: center;
  color: white;
  text-decoration: none;
  margin: 0 auto;
  padding: 5px;
`;

export const Contact = styled.p`
  margin: 0;
  font-size: 16px;
  color: white;

  ${breakpoint("sm")`
    font-size: 20px;
  `}
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px;
  margin: 0;
  color: white;
  font-size: 20px;
  text-shadow: 5px 5px 5px black;
`;

export const HeadText = styled.p`
  margin: 0;
`;
