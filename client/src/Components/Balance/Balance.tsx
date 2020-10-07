import React, { useState, useContext, useEffect } from "react";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import { Container } from "./styles";

import UserContext from "../../context/UserContext";
import SocketContext from "../../context/SocketContext";

const Balance: React.FC = () => {
  const UserData = useContext(UserContext);
  const SocketData = useContext(SocketContext);
  const [socket, setSocket] = useState<any>(null);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    setBalance(UserData?.user.user?.balance);
  }, [UserData]);

  useEffect(() => {
    setSocket(SocketData);
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    const setState = (bet: any) => {
      if (bet.isWinner === true) {
        setBalance((balance) => balance + Number(bet.profit));
      } else {
        setBalance((balance) => balance - Number(bet.profit));
      }
    };

    socket.on("roll", setState);
  }, [socket]);

  return (
    <Container>
      <MonetizationOnOutlinedIcon
        style={{ fontSize: "22px", marginRight: "5px", marginLeft: "-2px" }}
      />
      {balance?.toFixed(8)}
    </Container>
  );
};

export default Balance;
