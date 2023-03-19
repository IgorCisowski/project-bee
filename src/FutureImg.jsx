import styled from "styled-components";

import metalBee from "./Assets/metalBee.png";
import polygon from "./Assets/polygon.png";

const Metalbee = styled.img`
  mix-blend-mode: luminosity;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 428px;
  width: 100%;
`;

const YellowPolygon = styled.img`
  opacity: 0.5;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const FutureImg = ({ className }) => {
  return (
    <div className={className}>
      <Metalbee src={metalBee} alt=""></Metalbee>
      <YellowPolygon src={polygon} alt=""></YellowPolygon>
    </div>
  );
};
