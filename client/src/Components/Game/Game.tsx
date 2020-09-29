import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, GameButtons } from "./styles";

import GameButton from "../GameButton/GameButton";
import GameTable from "../GameTable/GameTable";
import DicePanel from "../DicePanel/DicePanel";

import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Game: React.FC = () => {
  const [bets, setBets] = useState<Array<{}>>([]);
  const [displayNum, setDisplayNum] = useState(10);
  const [activeTable, setActiveTable] = useState("My bets");

  useEffect(() => {
    axios
      .get("dice")
      .then((res) => setBets(res.data))
      .catch((err) => console.log(err));

    const setState = (newbet: any) => {
      setBets((bets) => [newbet, ...bets]);
    };

    socket.on("bets", setState);
  }, [socket]);

  const chooseMyBets = () => {
    setActiveTable("My Bets");
  };

  const chooseAllBets = () => {
    setActiveTable("All bets");
  };

  const chooseHighRollers = () => {
    setActiveTable("High Rollers");
  };

  return (
    <Container>
      <DicePanel />
      <GameButtons>
        <GameButton opener={chooseMyBets}>My bets</GameButton>
        <GameButton opener={chooseAllBets}>All bets</GameButton>
        <GameButton opener={chooseHighRollers}>High rollers</GameButton>
        <GameButton>10</GameButton>
      </GameButtons>
      <GameTable data={bets} displaybets={displayNum} />
    </Container>
  );
};

export default Game;
