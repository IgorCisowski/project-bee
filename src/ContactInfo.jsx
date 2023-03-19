import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 10;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1050px) {
    width: 100%;
    padding-left: 0px;
  }

  @media (max-width: 768px) {
    margin-bottom: 45px;
  }
`;

const P = styled.p`
  color: white;
  line-height: 2.8;
`;

export const ContactInfo = ({ className }) => {
  return (
    <Container className={className}>
      <div>
        <P>+48 732 927 627</P>
        <P>office@executeit.pl</P>
      </div>
    </Container>
  );
};
