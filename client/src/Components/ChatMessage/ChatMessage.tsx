import React from "react";
import { motion } from "framer-motion";
import { LeftContainer, RightContainer, Username, Message } from "./styles";
import DefaultImage from "../../assets/avatar.png";

interface Props {
  username: string;
  message: string;
}

const ChatMessage = ({ username, message }: Props) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      style={{
        display: "flex",
        width: "100%",
        padding: "3px",
        margin: "3px 0px",
        opacity: "0",
      }}
    >
      <LeftContainer>
        <img src={DefaultImage} alt="defaultimg" />
      </LeftContainer>
      <RightContainer>
        <Username>{username}</Username>
        <Message>{message}</Message>
      </RightContainer>
    </motion.div>
  );
};

export default ChatMessage;
