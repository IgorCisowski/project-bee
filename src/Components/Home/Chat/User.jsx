import styled from "styled-components";
import beeFinal from "../../../Assets/beefinal.svg";

const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  list-style: none;
  min-height: 400px;
  height: 100%;
`;

const UserElement = styled.li`
  padding-bottom: 16px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  width: 80%;
`;

const UserPhoto = styled.div`
  grid-area: 1/1/3/2;
  margin-right: 8px;
  background-color: #fed700;
  border: 1px solid white;
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const UserName = styled.h4`
  margin-top: 3px;
  width: 80%;
  color: #ffd700;
  font-size: 16px;
`;

const Message = styled.p`
  margin-top: 4px;
  grid-column-start: 2;
  grid-column-end: 3;
  color: white;
  font-size: 16px;
`;

export const User = () => {
  const messages = ["Hello, I'm BeeAI", "How can I help you?"];

  return (
    <UserList>
      {messages.map((message, index) => {
        return (
          <UserElement key={index}>
            <UserPhoto className="profile">
              <img src={beeFinal} alt="aiProfilePicture" />
            </UserPhoto>
            <UserName>BeeAi</UserName>
            <Message>{message}</Message>
          </UserElement>
        );
      })}
    </UserList>
  );
};
