import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Wrapper } from "./styles";

import LoginRegister from "../LoginRegister/LoginRegister";
import ChatButton from "../ChatButton/ChatButton";
import Game from "../Game/Game";

interface Props {
  chatHandler: () => void;
}

const Body = ({ chatHandler }: Props) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return (
    <Container>
      <ChatButton chatHandler={chatHandler} />
      <Wrapper>
        <Game />
        {params.get("login") && <LoginRegister />}
      </Wrapper>
    </Container>
  );
};

export default Body;
