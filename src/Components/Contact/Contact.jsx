import styled from "styled-components";
import ContactLogo from "../../Assets/ContactLogo.png";
import head from "../../Assets/head.png";
import { FutureImg } from "../../FutureImg";
import { Slogan } from "./Slogan";
import { Logo } from "./Logo";
import { ContactInfo } from "../../ContactInfo";
import { CopyRight } from "../../CopyRight";
import { SocialMedia } from "../../SocialMedia";

const StyledContact = styled.section`
  padding: 100px 0 40px;
  background-color: black;
  background-image: radial-gradient(
    40% 100% at 0% 130%,
    rgba(255, 215, 0, 0.6),
    transparent 800px
  );

  @media (max-width: 1550px) {
    background-image: radial-gradient(
      50% 100% at 0% 115%,
      rgba(255, 215, 0, 0.6),
      transparent 650px
    );
  }

  @media (max-width: 860px) {
    background-image: radial-gradient(
      100% 100% at 0% 110%,
      rgba(255, 215, 0, 0.6),
      transparent 550px
    );
  }

  @media (max-width: 460px) {
    padding-top: 120px;
    background-image: radial-gradient(
      100% 50% at 20% 100%,
      rgba(255, 215, 0, 0.6),
      transparent 400px
    );
  }
`;

const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1520px;
  width: 100%;
`;
const Heading = styled.div``;

const WaysOfContact = styled.div`
  padding-right: 200px;
  margin: 0 auto 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1550px) {
    padding-right: 320px;
  }

  @media (max-width: 530px) {
    padding-right: 0px;
    padding-left: 20px;
    justify-content: flex-start;
  }
`;

const Big = styled.img`
  width: 1300px;

  @media (max-width: 1550px) {
    width: 1000px;
  }

  @media (max-width: 1050px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Small = styled.img`
  display: none;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 468px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const Contact = () => {
  return (
    <StyledContact>
      <ContactContainer>
        <Heading>
          <Big src={ContactLogo} alt=""></Big>
          <Small src={head} alt=""></Small>
        </Heading>
        <Slogan />
        <WaysOfContact>
          <ContactInfo />
          <SocialMedia />
          <Logo />
        </WaysOfContact>
        <CopyRight />
      </ContactContainer>
      <FutureImg />
    </StyledContact>
  );
};
