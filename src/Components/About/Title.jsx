import styled from "styled-components";

const AboutTitle = styled.div`
  margin-bottom: 130px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-size: 100px;
  font-weight: bold;

  @media (max-width: 1050px) {
    font-size: 68px;
    margin-bottom: 100px;
  }

  @media (max-width: 500px) {
    font-size: 58px;
  }
`;

const Span = styled.span`
  position: relative;
  margin-right: 25px;

  @media (max-width: 1050px) {
    margin-right: 10px;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -20px;
    left: -20px;
    background-color: #fed809;
    border-radius: 50%;
    width: 187px;
    height: 187px;

    @media (max-width: 1550px) {
      width: 180px;
      height: 180px;
      top: -20px;
      left: -20px;
    }

    @media (max-width: 1050px) {
      width: 130px;
      height: 130px;
      top: -15px;
      left: -15px;
    }

    @media (max-width: 500px) {
      top: -10px;
      left: -15px;
    }
  }
`;

export const Title = () => {
  return (
    <AboutTitle>
      <p>
        <Span>for</Span> whom it is directed
      </p>
    </AboutTitle>
  );
};
