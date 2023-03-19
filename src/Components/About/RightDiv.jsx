import styled from "styled-components";

const StyledRightDiv = styled.div`
  padding: 46px 34px;
  background: linear-gradient(rgb(74, 72, 62), rgb(9, 9, 9));
  border-radius: 30px;
  width: 50%;
  min-height: 1124px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, max-content);
  column-gap: 35px;
  row-gap: 35px;

  @media (max-width: 1050px) {
    row-gap: 30px;
  }

  @media (max-width: 940px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(7, max-content);
    min-height: 700px;
  }

  @media (max-width: 500px) {
    padding: 30px 20px;
  }
`;
const Square = styled.div``;

const Text = styled.h2`
  font-size: 19px;
  font-weight: 400;
  line-height: 36px;
  color: white;

  @media (max-width: 1050px) {
    font-size: 17px;
    line-height: 32px;
  }
`;

const Span = styled.span`
  color: rgb(255, 215, 0);
  font-weight: bold;
`;

const Button = styled.div`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: rgb(255, 235, 128);
  font-size: 19px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
`;

export const RightDiv = ({ span, content }) => {
  return (
    <StyledRightDiv>
      {span.map((el, con) => {
        return (
          <Square key={con}>
            <Text>
              <Span>{el} </Span>
              {content[con]}
            </Text>
            <Button>Try Now</Button>
          </Square>
        );
      })}
    </StyledRightDiv>
  );
};
