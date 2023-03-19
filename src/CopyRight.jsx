import styled from "styled-components";
const Copy = styled.p`
  margin-top: 150px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: white;
  position: relative;
  z-index: 10;
`;
export const CopyRight = ({ className }) => {
  return (
    <Copy className={className}>© 2023 Execute IT All Rights Reserved</Copy>
  );
};
