import styled from "styled-components";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Bundles } from "./Components/Bundles/Bundles";
import { Contact } from "./Components/Contact/Contact";
import arrow from "./Assets/arrowUp.png";
import { useState, useEffect } from "react";

const StyledMain = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const ArrowToTop = styled.img`
  cursor: pointer;
  z-index: 20;
  bottom: ${({ show }) => (show ? "50px" : "-50px")};
  position: fixed;
  right: 50px;
  transition: bottom 0.5s ease 0s;
`;

export const Main = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY || window.scrollY < 300) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <StyledMain>
      <Home />
      <About />
      <Bundles />
      <Contact />
      <ArrowToTop show={show} src={arrow} onClick={handleTop}></ArrowToTop>
    </StyledMain>
  );
};
