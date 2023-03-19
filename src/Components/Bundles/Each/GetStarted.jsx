import styled from "styled-components";
import bee from "../../../Assets/beefinal.svg";

const ButtonContainer = styled.div`
  margin-top: 30px;
  position: relative;
`;

const StyledButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  width: 100%;
  border-radius: 10px;
  padding: 15px 0;
  cursor: pointer;
`;

const Bee = styled.img`
  position: absolute;
  top: -25px;
  right: 0;
`;
export const GetStarted = () => {
  return (
    <ButtonContainer>
      <StyledButton>Get started</StyledButton>
      <Bee src={bee}></Bee>
    </ButtonContainer>
  );
};
