import React from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  Username,
  Message,
} from "./styles";
import DefaultImage from "../../assets/avatar.png";

interface Props {
  username: string;
  message: string;
}

const ChatMessage = ({ username, message }: Props) => {
  return (
    <Container>
      <LeftContainer>
        <img src={DefaultImage} alt="defaultimg" />
      </LeftContainer>
      <RightContainer>
        <Username>{username}</Username>
        <Message>{message}</Message>
      </RightContainer>
    </Container>
  );
};

export default ChatMessage;
