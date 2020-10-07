import React, { useState, useEffect, useContext } from "react";
import { Container, Wrapper, FadedDiv } from "./styles";
import axios from "axios";

import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatSend from "../ChatSend/ChatSend";
import ChatButton from "../ChatButton/ChatButton";

import SocketContext from "../../context/SocketContext";

interface Props {
  chatHandler: () => void;
}

const Chat = ({ chatHandler }: Props) => {
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
      <ChatButton chatHandler={chatHandler} />
      <Wrapper>
        <ChatHeader chatHandler={chatHandler} />
        <ChatMessages data={messages} />
        <FadedDiv />
        <ChatSend />
      </Wrapper>
    </Container>
  );
};

export default Chat;
