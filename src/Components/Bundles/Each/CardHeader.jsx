import styled from "styled-components";

const Header = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 170px;
`;
const H2 = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
  color: white;
  text-align: center;
`;
const POne = styled.h3`
  font-weight: 400;
  font-size: 32px;
  color: #ffeb80;
`;
const PTwo = styled.h4`
  font-weight: 400;
  font-size: 19px;
  color: white;
`;

export const CardHeader = ({ h2, h3 }) => {
  return (
    <Header>
      <H2>{h2}</H2>
      <POne>{h3}</POne>
      <PTwo>MemberShip</PTwo>
    </Header>
  );
};
