import styled from "styled-components";
import bg from "../../Assets/bg.jpg";
import { Header } from "../Header/Header";
import { HomeHeading } from "./HomeHeading/HomeHeading";
import { Chat } from "../Home/Chat/Chat";

const StyledHome = styled.section`
  overflow: hidden;
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
  height: 1059px;
  background: white;
  background-image: url(${bg});
  background-repeat: no-repeat;

  @media (max-width: 1050px) {
    height: 1400px;
  }

  @media (max-width: 768px) {
    background-position: 31% 0%;
  }

  @media (max-width: 500px) {
    height: 1700px;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  gap: 90px;
  padding: 30px 60px 0 200px;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;

  @media (max-width: 1400px) {
    gap: 50px;
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Home = () => {
  return (
    <StyledHome>
      <Header />
      <HomeContainer>
        <HomeHeading />
        <Chat />
      </HomeContainer>
    </StyledHome>
  );
};
