import styled from "styled-components";
import add from "../../../Assets/add.svg";

const StyledAppend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -35px;
  left: 0;
  width: 40px;
  height: 35px;
  background-color: #090909;
  border-radius: 8px 8px 0 0;
`;

export const AddChat = () => {
  return (
    <StyledAppend>
      <img src={add} alt="" />
    </StyledAppend>
  );
};
