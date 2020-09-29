import React from "react";
import { Container, Wrapper } from "./styles";

// import Coins from "../../assets/coins.svg";
import Card from "../../assets/Card.svg";
import Chips from "../../assets/Chips.svg";

interface Props {
  title: string;
  route: string;
}

const InfoButton = ({ title, route }: Props) => {
  return (
    <Container>
      <Wrapper>
        <h2>{title}</h2>
        <img src={Card} alt="none" />
        <img src={Chips} alt="none" />
      </Wrapper>
    </Container>
  );
};

export default InfoButton;
