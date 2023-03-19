import styled from "styled-components";
import { useState } from "react";
import { Popup } from "../../Popup";
import burgerIcon from "../../Assets/BurgerMenu/burgerMenu.png";
import { NavUl } from "./NavUl";

const StyledHeader = styled.section`
  max-width: 1920px;
  width: 100%;
`;

const Navbar = styled.nav`
  position: relative;
  padding: 40px 0 0;
`;

const Burger = styled.button`
  position: fixed;
  z-index: 100;
  padding-left: 24px;
  background-color: transparent;
  border: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    toggle
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };

  return (
    <StyledHeader>
      <Popup />
      <Navbar>
        <Burger onClick={handleToggle}>
          <img src={burgerIcon} alt="" />
        </Burger>
        <NavUl
          handleToggle={handleToggle}
          toggle={toggle}
          setToggle={setToggle}
        />
      </Navbar>
    </StyledHeader>
  );
};
