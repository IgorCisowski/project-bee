import styled from "styled-components";

const Heading = styled.h2`
  margin-top:40px;
  padding-right:20px;
  display: flex;
  justify-content: flex-end;
  width:100%:
  margin-bottom: 90px;
  gap: 10px;
  width: 100%;
  color: white;
  font-family: "Gluten", cursive;
  font-size: 68px;
  font-weight: 400;

  @media (max-width: 1050px) {
    width: 100%;
  }

  @media (max-width: 860px) {
    padding-left: 20px;
    justify-content: flex-start;
  }


  @media (max-width: 460px) {

    margin-bottom: 350px;
  }
`;

export const Logo = () => {
  return (
    <Heading>
      <span>Bee</span>
      <span>AI</span>
    </Heading>
  );
};
