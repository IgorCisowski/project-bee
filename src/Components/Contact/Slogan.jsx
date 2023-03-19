import styled from "styled-components";

const StyledSlogan = styled.div`
  margin-bottom: 40px;
  text-align: center;
  color: white;
  line-height: 43px;
  font-size: 32px;

  @media (max-width: 1550px) {
    font-size: 28px;
  }

  @media (max-width: 1050px) {
    font-size: 24px;
  }

  @media (max-width: 468px) {
    margin-bottom: 70px;
  }
`;

const P = styled.p`
  color: #ffd700;

  span {
    color: white;
  }
`;
export const Slogan = () => {
  return (
    <StyledSlogan>
      <P>
        The ultimate AI assistant <span>for Slack and Discord</span>
      </P>
    </StyledSlogan>
  );
};
