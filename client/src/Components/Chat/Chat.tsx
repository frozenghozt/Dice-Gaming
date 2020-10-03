import React, { useState, useEffect, useContext } from "react";
import { Container, Wrapper, FadedDiv } from "./styles";
import axios from "axios";

import ChatMessages from "../ChatMessages/ChatMessages";
import ChatSend from "../ChatSend/ChatSend";

import SocketContext from "../../context/SocketContext";

const Chat: React.FC = () => {
  const [socket, setSocket] = useState<any>(null);
  const [messages, setMessages] = useState<Array<{}>>([]);
  const SocketData = useContext(SocketContext);

  useEffect(() => {
    setSocket(SocketData);
  }, [socket]);

  useEffect(() => {
    axios
      .get("/chat")
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!socket) return;

    const setState = (newMessage: any) => {
      setMessages((messages) => [newMessage, ...messages]);
    };
    socket.on("chat", setState);
  }, [socket]);

  return (
    <Container>
      <FadedDiv />
      <Wrapper>
        <ChatMessages data={messages} />
        <ChatSend />
      </Wrapper>
    </Container>
  );
};

export default Chat;
