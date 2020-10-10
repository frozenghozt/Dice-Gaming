import React, { useState, useEffect, useContext } from "react";
import { Container, Wrapper, FadedDiv } from "./styles";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatSend from "../ChatSend/ChatSend";

import SocketContext from "../../context/SocketContext";

interface Props {
  chatHandler: () => void;
  isOpen: boolean;
}

const Chat = ({ chatHandler, isOpen }: Props) => {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
        >
          <Container>
              <FadedDiv />
            <Wrapper>
              <ChatHeader chatHandler={chatHandler} />
              <ChatMessages data={messages} />
              <ChatSend />
            </Wrapper>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chat;
