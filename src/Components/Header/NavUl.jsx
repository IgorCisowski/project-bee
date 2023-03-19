import styled from "styled-components";
import yellowX from "../../Assets/BurgerMenu/yellowX.svg";
import { FutureImg } from "../../FutureImg";
import { SocialMedia } from "../../SocialMedia";
import { ContactInfo } from "../../ContactInfo";
import { CopyRight } from "../../CopyRight";
const YellowX = styled.button`
  margin-bottom: 33px;
  top: 40px;
  left: 24px;
  position: fixed;
  z-index: 10;
  background-color: transparent;
  border: none;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Ul = styled.ul`
  padding: 0 50px;
  display: flex;
  justify-content: flex-end;
  list-style: none;

  @media (max-width: 769px) {
    padding: 100px 50px 20px;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    transform: ${({ toggle }) =>
      toggle ? "translate(0%)" : "translate(-100%)"};
    transition: 0.3s ease-in;
  }
`;

const StyleLink = styled.a`
  margin-left: 40px;
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  text-decoration: none;

  @media (max-width: 769px) {
    color: white;
    font-size: 20px;
    margin: 0;
  }
`;

const StyledContactInfo = styled(ContactInfo)`
  @media (min-width: 769px) {
    display: none;
  }
  align-items: flex-end;
  margin-bottom: 0;
`;

const StyledFutureImg = styled(FutureImg)`
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledSocialMedia = styled(SocialMedia)`
  @media (min-width: 769px) {
    display: none;
  }
  margin-bottom: 240px;
  justify-content: center;
`;

const StyledCopyRight = styled(CopyRight)`
  @media (min-width: 769px) {
    display: none;
  }
  margin: 0;
`;

export const NavUl = ({ handleToggle, toggle, setToggle }) => {
  const links = ["About", "Use cases", "Sign in"];
  const whereTo = ["#", "#About", "#"];

  const handleClose = () => {
    setToggle(false);
    document.body.style.overflow = "unset";
  };

  return (
    <Ul toggle={toggle}>
      <YellowX onClick={handleToggle}>
        <img src={yellowX} alt="" />
      </YellowX>

      {links.map((link, index) => {
        return (
          <li key={index} onClick={handleClose}>
            <StyleLink href={whereTo[index]}>{link}</StyleLink>
          </li>
        );
      })}
      <StyledSocialMedia />
      <StyledContactInfo />
      <StyledCopyRight />
      <StyledFutureImg />
    </Ul>
  );
};
