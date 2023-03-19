import styled from "styled-components";

const ServiceContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 120px;
  padding-left: 16px;
`;

const ListItem = styled.li`
  color: white;
  padding-bottom: 10px;
`;
export const Service = ({ services }) => {
  return (
    <ServiceContainer>
      <ul>
        {services.map((service, i) => {
          return <ListItem key={i}>{service}</ListItem>;
        })}
      </ul>
    </ServiceContainer>
  );
};
