import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Wrapper } from "./styles";

import LoginRegister from "../LoginRegister/LoginRegister";
import Game from "../Game/Game";

const Body: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return (
    <Container>
      <Wrapper>
        <Game />
        {params.get("login") && <LoginRegister />}
      </Wrapper>
    </Container>
  );
};

export default Body;
