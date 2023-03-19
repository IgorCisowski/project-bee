import styled from "styled-components";
import bundleBg from "../../Assets/bundleBg.png";
import { Heading } from "../Bundles/Heading";
import { Buttons } from "../Bundles/Buttons";
// import { Bundle } from "../Bundles/Each/Bundle";

const StyledBundles = styled.section`
  position: relative;
  z-index: 2;
  padding: 150px 0;
  background-color: black;
  background-image: url(${bundleBg});
  background-repeat: no-repeat;
  background-position: 100% 100%;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    background-image: radial-gradient(
      80% 80% at 90% 25%,
      rgba(255, 215, 0, 0.6),
      transparent 600px
    );
    width: 100%;
    height: 100%;

    @media (max-width: 1550px) {
      background-image: radial-gradient(
        80% 80% at 90% 20%,
        rgba(255, 215, 0, 0.6),
        transparent 500px
      );
    }

    @media (max-width: 1100px) {
      background-image: radial-gradient(
        100% 50% at 100% 0%,
        rgba(255, 215, 0, 0.6),
        transparent 700px
      );
    }

    @media (max-width: 769px) {
      background-image: radial-gradient(
        100% 50% at 100% -5%,
        rgba(255, 215, 0, 0.6),
        transparent 650px
      );
    }

    @media (max-width: 480px) {
      background-image: radial-gradient(
        100% 50% at 100% -20%,
        rgba(255, 215, 0, 0.6),
        transparent 500px
      );
    }
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    background-image: radial-gradient(
      100% 100% at 0% 100%,
      rgba(255, 215, 0, 1),
      transparent 800px
    );
    width: 100%;
    height: 100%;

    @media (max-width: 1550px) {
      background-image: radial-gradient(
        60% 100% at 10% 130%,
        rgba(255, 215, 0, 0.6)
      );
    }

    @media (max-width: 1100px) {
      background-image: radial-gradient(
        60% 100% at 10% 155%,
        rgba(255, 215, 0, 0.6),
        transparent 700px
      );
    }

    @media (max-width: 769px) {
      background-image: radial-gradient(
        60% 100% at 10% 165%,
        rgba(255, 215, 0, 0.6),
        transparent 500px
      );
    }

    @media (max-width: 480px) {
      background-image: radial-gradient(
        60% 100% at 10% 165%,
        rgba(255, 215, 0, 0.6),
        transparent 300px
      );
    }
  }
`;

const BundlesContainer = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1520px;
  width: 100%;
`;
export const Bundles = () => {
  return (
    <StyledBundles>
      <BundlesContainer>
        <Heading />
        <Buttons />
      </BundlesContainer>
    </StyledBundles>
  );
};
