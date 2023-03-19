import twitter from "./Assets/SocialMedia/twitter.svg";
import facebook from "./Assets/SocialMedia/facebook.svg";
import instagram from "./Assets/SocialMedia/instagram.svg";
import Polygon from "./Assets/SocialMedia/Polygon.svg";

import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 50%;

  @media (max-width: 1050px) {
    width: 100%;
  }

  @media (max-width: 860px) {
    justify-content: flex-start;
  }
`;

const StyledPolygon = styled.a`
  position: relative;
`;

const PolygonContent = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SocialMedia = ({ className }) => {
  const images = [twitter, facebook, instagram];
  const links = ["twitter", "facebook", "instagram"];

  return (
    <>
      <StyledContainer className={className}>
        {links.map((link, img) => {
          return (
            <StyledPolygon
              key={img}
              href={`https://${link}.com/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Polygon} alt="" />
              <PolygonContent src={images[img]} alt=""></PolygonContent>
            </StyledPolygon>
          );
        })}
      </StyledContainer>
    </>
  );
};
