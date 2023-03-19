import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 120px;

  @media (max-width: 460px) {
    margin-bottom: 60px;
  }
`;
const HeadingOne = styled.h1`
  color: #ffd700;
  font-size: 200px;

  @media (max-width: 1400px) {
    font-size: 150px;
  }

  @media (max-width: 1050px) {
    font-size: 100px;
  }

  @media (max-width: 460px) {
    font-size: 58px;
  }
`;
const HeadingTwo = styled.span`
  font-size: 58px;
  color: white;
  font-weight: bold;

  @media (max-width: 1400px) {
    font-size: 45px;
  }

  @media (max-width: 1050px) {
    font-size: 35px;
  }

  @media (max-width: 460px) {
    font-size: 32px;
  }
`;

export const Heading = () => {
  return (
    <Container>
      <HeadingOne>Ready to get started?</HeadingOne>
      <HeadingTwo>Choose a plan tailored to your needs</HeadingTwo>
    </Container>
  );
};
