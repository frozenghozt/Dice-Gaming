import React from "react";
import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
  opener?: () => void;
}

const GameButton = ({ children, opener }: Props) => {
  return <Container onClick={opener}>{children}</Container>;
};

export default GameButton;
