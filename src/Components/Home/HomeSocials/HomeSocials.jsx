import styled from "styled-components";

import chat from "../../../Assets/Socials/chatgpt.png";
import discord from "../../../Assets/Socials/discord.png";
import teams from "../../../Assets/Socials/teams.png";
import telegram from "../../../Assets/Socials/telegram.png";
import whatsup from "../../../Assets/Socials/whatsup.png";
import skype from "../../../Assets/Socials/skype.png";

const StyledSocials = styled.div`
  margin-top: 30px;
  position: relative;

  @media (max-width: 1400px) {
    padding-left: 50px;
  }
`;

const Social = styled.img`
  position: absolute;
  left: 25px;
  width: 143px;
  aspect-ratio: auto 143 / 125;
  height: 125px;

  @media (max-width: 1400px) {
    left: 50px;
    width: 100px;
    height: 85px;
  }

  @media (max-width: 500px) {
    left: -15px;
  }

  & + & {
    top: 70px;
    left: 140px;

    @media (max-width: 1400px) {
      top: 50px;
      left: 130px;
    }

    @media (max-width: 500px) {
      left: 65px;
    }
  }

  & + & + & {
    width: 115px;
    aspect-ratio: auto 115 / 100;
    height: 100px;
    left: 263px;
    top: 27px;
    @media (max-width: 1400px) {
      width: 72px;
      height: 59px;
      left: 218px;
      top: 30px;
    }
    @media (max-width: 500px) {
      left: 152px;
    }
  }

  & + & + & + & {
    left: 358px;
    top: 80px;

    @media (max-width: 1400px) {
      left: 275px;
      top: 65px;
    }

    @media (max-width: 500px) {
      left: 210px;
    }
  }

  & + & + & + & + & {
    left: 453px;
    top: 27px;

    @media (max-width: 1400px) {
      left: 334px;
      top: 32px;
    }

    @media (max-width: 500px) {
      left: 268px;
    }
  }

  & + & + & + & + & + & {
    left: 453px;
    top: 135px;
    @media (max-width: 1400px) {
      left: 334px;
      top: 97px;
    }
    @media (max-width: 500px) {
      left: 268px;
    }
  }
`;

export const HomeSocials = () => {
  const socials = [chat, discord, teams, telegram, whatsup, skype];

  return (
    <>
      <StyledSocials>
        {socials.map((social, index) => {
          return <Social key={index} src={social}></Social>;
        })}
      </StyledSocials>
    </>
  );
};
