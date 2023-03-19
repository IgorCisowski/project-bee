import styled from "styled-components";
import BeeLogo from "../../../Assets/BeeLogoHome.png";
import { HomeSocials } from "../../Home/HomeSocials/HomeSocials";
import beeFinalSvg from "../../../Assets/beefinal.svg";

const HeadingContainer = styled.div`
  max-width: 550px;
  width: 100%;

  @media (max-width: 1400px) {
    max-width: 450px;
    width: 100%;
  }

  @media (max-width: 1400px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 1050px) {
    padding: 0 50px;
  }

  @media (max-width: 860px) {
    padding: 0 0px;
  }
  @media (max-width: 500px) {
    padding-bottom: 150px;
  }
`;

const HeadingLogo = styled.img`
  width: 100%;
`;
const HeadingText = styled.p`
  font-size: 19px;
  line-height: 36px;
  text-align: justify;
`;

const HeadingButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 1050px) {
    margin-top: 40px;
  }
`;

const Button = styled.button`
  padding: 15px 0;
  border: none;
  border-radius: 10px;
  width: 300px;
  cursor: pointer;
  background-color: black;
  color: white;
  font-size: 15px;

  @media (max-width: 1050px) {
    max-width: 100%;
    width: 100%;
  }
`;

const BeeSvg = styled.img`
  position: absolute;
  top: -25px;
  right: 0;
`;

export const HomeHeading = () => {
  return (
    <HeadingContainer>
      <HeadingLogo src={BeeLogo}></HeadingLogo>
      <HeadingText>
        Meet Bee Ai - the ultimate AI assistant fot Slack and Discord. Utilizing
        ChatGPT API, it provides assistance on any task, from information to
        document work, summaries, translations and explanations. Easy to
        integrate with Slack, Discord and other communication platform. Bee AI
        streamlines workflow and increases productivity with user-friendly
        interface and powerful AI capabilities. Try it today!
      </HeadingText>
      <HeadingButton>
        <Button>Try now</Button>
        <BeeSvg src={beeFinalSvg} alt=""></BeeSvg>
      </HeadingButton>
      <HomeSocials />
    </HeadingContainer>
  );
};
