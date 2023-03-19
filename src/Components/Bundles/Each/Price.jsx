import styled from "styled-components";

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 140px;
  margin-top: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #707070;
`;

const Dollar = styled.div`
  color: white;
`;

const ActualPrice = styled.div`
  color: white;
  font-size: 100px;
`;

const Per = styled.div`
  color: white;
  align-self: end;
`;

export const Price = ({ per, price }) => {
  return (
    <PriceContainer>
      <Dollar>$</Dollar>
      <ActualPrice>{price}</ActualPrice>
      <Per>/{per}</Per>
    </PriceContainer>
  );
};
