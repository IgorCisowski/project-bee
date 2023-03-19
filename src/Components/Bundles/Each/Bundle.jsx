import styled from "styled-components";

import kleps from "../../../Assets/BundlesImg/kleps.svg";
import box from "../../../Assets/BundlesImg/box.svg";
import mess from "../../../Assets/BundlesImg/mess.svg";
import crown from "../../../Assets/BundlesImg/crown.svg";
import { GetStarted } from "./GetStarted";
import { Price } from "./Price";
import { Service } from "./Service";
import { CardHeader } from "./CardHeader";

const CardContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 18px;

  @media (max-width: 1050px) {
    flex-wrap: wrap;
    row-gap: 60px;
  }
  @media (max-width: 460px) {
    row-gap: 80px;
  }


  }
`;

const Card = styled.div`
  padding: 44px 20px 20px;
  position: relative;
  max-width: 350px;
  width: 100%;
  height: 650px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &:nth-of-type(3) {
    background: linear-gradient(
      0deg,
      rgba(255, 215, 0, 1) 0%,
      rgba(255, 190, 0, 1) 60%
    );

    h2,
    h3,
    li,
    div {
      color: black;
    }
  }

  @media (max-width: 460px) {
    max-width: 380px;
  }
`;

const CardLogo = styled.div`
  width: max-content;
  position: absolute;
  top: -43px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const Bundle = ({ price, per }) => {
  const Cards = [
    {
      img: kleps,
      h2: "free",
      h3: "Testing",
      price: price[0],
      services: ["free assistant"],
    },
    {
      img: box,
      h2: "personal",
      h3: "Perfect to get started",
      price: price[1],
      services: ["free assistant", "chat support"],
    },
    {
      img: mess,
      h2: "team",
      h3: "Best for professionals",
      price: price[2],
      services: ["free assistant", "chat support", "all fetures"],
    },
    {
      img: crown,
      h2: "Enterprise",
      h3: "Toolset for hard players",
      price: price[3],
      services: ["free assistant", "chat support", "all fetures", "unlimited"],
    },
  ];

  return (
    <CardContainer>
      {Cards.map((card, i) => {
        return (
          <Card key={i}>
            <CardLogo>
              <img src={card.img} alt="" />
            </CardLogo>
            <CardHeader h2={card.h2} h3={card.h3} />
            <Price price={card.price} per={per} />
            <Service services={card.services} />
            <GetStarted />
          </Card>
        );
      })}
    </CardContainer>
  );
};
