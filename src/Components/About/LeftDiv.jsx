import styled from "styled-components";

const StyledLeftDiv = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 940px) {
    width: 100%;
  }

  &:before {
    content: "";
    top: -76px;
    left: 50%;
    transform: translate(-50%);
    position: absolute;
    z-index: 1;
    background: rgb(255, 215, 0);
    background: linear-gradient(
      145deg,
      rgba(255, 211, 0, 1) 55%,
      rgba(255, 190, 0, 1) 100%
    );
    border-radius: 50%;
    width: 187px;
    height: 187px;

    @media (max-width: 1050px) {
      width: 140px;
      height: 140px;
      top: -50px;
    }
  }
`;
const Wrapper = styled.div`
  min-height: 752px;
  padding: 60px 45px;
  position: relative;
  z-index: 12;
  border-radius: 30px;
  background: rgb(255, 215, 0);
  background: linear-gradient(
    145deg,
    rgba(255, 215, 0, 1) 0%,
    rgba(255, 190, 0, 1) 100%
  );

  @media (max-width: 940px) {
    min-height: 300px;
  }

  @media (max-width: 500px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h2`
  font-size: 58px;
  margin-bottom: 30px;

  @media (max-width: 1050px) {
    font-size: 48px;
  }

  @media (max-width: 940px) {
    font-size: 32px;
  }

  @media (max-width: 860px) {
    font-size: 32px;
  }
`;

const Content = styled.p`
  line-height: 70px;
  font-size: 32px;

  @media (max-width: 1050px) {
    font-size: 25px;
    line-height: 50px;
  }

  @media (max-width: 940px) {
    font-size: 19px;
    line-height: 36px;
  }


  }
`;

const Carousel = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 215px;
  width: 100%;
  margin: 40px auto 25px;
`;

const CarouselEl = styled.div`
  height: 15px;
  width: ${({ data, el }) => (data.id === el.id ? "65px" : "15px")};
  background-color: black;
  border-radius: ${({ data, el }) => (data.id === el.id ? "8px" : "50%")};
`;

export const LeftDiv = ({ tabData, allTabs }) => {
  return (
    <>
      <StyledLeftDiv>
        <Wrapper>
          <Title>{tabData.title}</Title>
          <Content>{tabData.text}</Content>
        </Wrapper>
        <Carousel>
          {allTabs.map((el) => {
            return <CarouselEl key={el.id} data={tabData} el={el}></CarouselEl>;
          })}
        </Carousel>
      </StyledLeftDiv>
    </>
  );
};
