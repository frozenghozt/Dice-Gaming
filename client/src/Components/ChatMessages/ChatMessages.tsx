import React from "react";
import { Container } from "./styles";

import ChatMessage from "../ChatMessage/ChatMessage";

interface Props {
  data: any[];
}

const ChatMessages = ({ data }: Props) => {
  return (
    <Container>
      {data.map(({ user, message }, i) => (
        <ChatMessage key={i} username={user} message={message} />
      ))}
    </Container>
  );
};

export default ChatMessages;
