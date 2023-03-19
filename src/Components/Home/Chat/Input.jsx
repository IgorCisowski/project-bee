import styled from "styled-components";
import send from "../../../Assets/send.svg";

const InputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 12px 48px;
  border: 2px solid #ffd700;
  border-radius: 10px;
  background-color: transparent;
  font-size: 16px;
  color: white;
  outline: none;

  &::placeholder {
    color: #ffd700;
    font-size: 16px;
  }
`;

const Button = styled.button`
  position: absolute;
  z-index: 20;
  bottom: 10px;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Input = () => {
  return (
    <InputContainer>
      <StyledInput placeholder="New message..."></StyledInput>
      <Button>
        <img src={send} alt="" />
      </Button>
    </InputContainer>
  );
};
