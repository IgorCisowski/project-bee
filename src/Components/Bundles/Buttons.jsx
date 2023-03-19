import { useState } from "react";
import styled from "styled-components";
import { Bundle } from "../Bundles/Each/Bundle";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: ${({ priceData, el }) =>
    priceData.id === el.id ? "transparent" : "#3e3c34"};
  border: none;
  border: 2px solid
    ${({ priceData, el }) =>
      priceData.id === el.id ? "rgb(254, 216, 9)" : "none"};
  border-radius: 30px;
  padding: 12px 0;
  color: white;
  font-size: 20px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 460px) {
    max-width: 100%;
  }
`;

export const Buttons = () => {
  const data = [
    {
      id: 1,
      name: "Monthly",
      price: ["0", "49", "99", "129"],
      per: "per month",
    },
    {
      id: 2,
      name: "Yearly - 20% OFF",
      price: ["0", "465", "952", "1239"],
      per: "per year",
    },
  ];
  const [priceData, setPriceData] = useState(data[0]);

  return (
    <>
      <ButtonContainer>
        {data.map((el) => {
          return (
            <Button
              key={el.id}
              priceData={priceData}
              el={el}
              onClick={(id) => setPriceData(el)}
            >
              {el.name}
            </Button>
          );
        })}
      </ButtonContainer>
      <Bundle price={priceData.price} per={priceData.per} />
    </>
  );
};
