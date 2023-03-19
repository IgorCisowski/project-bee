import styled from "styled-components";
import metalBee2 from "../../Assets/metalBee2.png";
import colage from "../../Assets/colage.png";
import { Buttons } from "./Buttons";
import { Title } from "./Title";

const StyledAbout = styled.section`
  position: relative;
  padding: 30px 0 140px;
  background-image: url(${metalBee2});
  background-repeat: no-repeat;
  background-position: 0% 125%;
  background-size: 580px;
  background-color: white;
  background-blend-mode: luminosity;

  @media (max-width: 860px) {
    padding-bottom: 400px;
    background-size: 450px;
    background-position: 0% 110%;
  }

  @media (max-width: 500px) {
    background-size: 385px;
    background-position: 0 105%;
  }
`;

const AboutContainer = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0 60px;
  max-width: 1520px;
  width: 100%;

  @media (max-width: 860px) {
    padding: 0 30px;
  }
`;

const Colage = styled.img`
  position: absolute;
  bottom: -70px;
  left: 400px;

  @media (max-width: 800px) {
    width: 300px;
    left: 100px;
  }

  @media (max-width: 480px) {
    width: 200px;
    bottom: -37px;
    left: 100px;
  }
`;
export const About = () => {
  return (
    <StyledAbout id="About">
      <AboutContainer>
        <Title />
        <Buttons />
      </AboutContainer>
      <Colage src={colage}></Colage>
    </StyledAbout>
  );
};
