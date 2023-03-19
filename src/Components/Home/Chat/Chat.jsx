import styled from "styled-components";
import { AddChat } from "../Chat/AddChat";
import { Input } from "../Chat/Input";
import { User } from "../Chat/User";

import smallBee from "../../../Assets/bee.png";

const StyledChat = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 70px;
  padding: 15px 12px;
  background-color: #484848;
  border-radius: 0 20px 20px;

  position: relative;
  max-width: 721px;
  width: 100%;

  height: 720px;

  @media (max-width: 1400px) {
    max-height: 550px;
  }

  @media (max-width: 1050px) {
    margin: 150px auto 0;
  }

  @media (max-width: 1050px) {
    margin: 150px auto 0;
  }
`;

const BeeImg = styled.img`
  position: absolute;
  width: 500px;
  z-index: 10;
  left: 80.5%;
  top: 0px;

  @media (max-width: 1050px) {
    width: 200px;
    left: 95%;
    top: -140px;
  }

  @media (max-width: 860px) {
    width: 160px;
    left: 87%;
    top: -170px;
  }

  @media (max-width: 500px) {
    width: 160px;
    left: 70%;
  }
`;

export const Chat = () => {
  return (
    <StyledChat>
      <AddChat />
      <User />
      <Input />
      <BeeImg src={smallBee}></BeeImg>
    </StyledChat>
  );
};
