import React from "react";
import { Route } from "react-router-dom";
import { Container, Wrapper } from "./styles";

import LoginRegister from "../LoginRegister/LoginRegister";
import Game from "../Game/Game";

const Body: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Game />
        <Route path="/" render={() => LoginRegister} />
      </Wrapper>
    </Container>
  );
};

export default Body;
