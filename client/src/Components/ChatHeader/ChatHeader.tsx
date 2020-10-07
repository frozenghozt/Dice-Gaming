import React from "react";
import { Container, Wrapper } from "./styles";

interface Props {
  chatHandler: () => void;
}

const ChatHeader = ({ chatHandler }: Props) => {
  return (
    <Container>
      <Wrapper>
        <span onClick={chatHandler}>Fechar</span>
      </Wrapper>
    </Container>
  );
};

export default ChatHeader;
