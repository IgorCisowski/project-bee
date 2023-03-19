import { useState } from "react";
import styled from "styled-components";
import icon from "./Assets/Icon.svg";

const StyledPopUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  padding: 5px 0;
  width: 100%;
  background-color: #090909;
`;

const PopUpContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 6px;
`;

const Paragraph = styled.p`
  color: #ffd700;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.2px;
`;

const Span = styled.span`
  cursor: pointer;
  color: #ffffff;
  font-size: 13px;
`;

const Svg = styled.div`
  cursor: pointer;
  padding-right: 20px;
  align-self: flex-end;
`;

export const Popup = () => {
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(false);
  };

  return (
    close && (
      <StyledPopUp>
        <PopUpContainer>
          <Paragraph>invite your friend to use BeeAi</Paragraph>
          <Span>send {`>`}</Span>
        </PopUpContainer>
        <Svg onClick={handleClose}>
          <img src={icon} alt="" />
        </Svg>
      </StyledPopUp>
    )
  );
};
