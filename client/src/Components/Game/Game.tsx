import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, GameButtons } from "./styles";

import GameButton from "../GameButton/GameButton";
import GameTable from "../GameTable/GameTable";
import DicePanel from "../DicePanel/DicePanel";

import UserContext from "../../context/UserContext";
import SocketContext from "../../context/SocketContext";

const Game: React.FC = () => {
  const [socket, setSocket] = useState<any>(null);
  const [allbets, setAllBets] = useState<Array<{}>>([]);
  const [displayNum, setDisplayNum] = useState(10);
  const [activeTable, setActiveTable] = useState("mybets");
  const UserData = useContext(UserContext);
  const SocketData = useContext(SocketContext);
  const username = UserData?.user.user?.username;

  useEffect(() => {
    setSocket(SocketData);
  }, [socket]);

  useEffect(() => {
    if (!username) return;

    axios
      .get(`/dice/${activeTable}/${username}/${displayNum}`)
      .then((res) => setAllBets(res.data))
      .catch((err) => console.log(err));
  }, [username, activeTable, displayNum]);

  useEffect(() => {
    if (!socket) return;

    const allBetsFunc = (newbet: any) => {
      if (activeTable === "allbets") {
        setAllBets((allbets) => [newbet, ...allbets]);
      }
    };

    socket.on("allbets", allBetsFunc);
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    const allBetsFunc = (newbet: any) => {
      if (activeTable === "mybets") {
        setAllBets((allbets) => [newbet, ...allbets]);
      }
    };

    socket.on("roll", allBetsFunc);
  }, [socket]);

  const chooseMyBets = () => {
    setActiveTable("mybets");
  };

  const chooseAllBets = () => {
    setActiveTable("allbets");
  };

  const chooseHighRollers = () => {
    setActiveTable("highrollers");
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
      <GameTable data={allbets} displaybets={displayNum} />
    </Container>
  );
};

export default Game;
