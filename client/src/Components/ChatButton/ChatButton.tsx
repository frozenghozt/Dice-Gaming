import React from "react";
import { Container } from "./styles";

import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

interface Props {
  chatHandler: () => void;
}

const ChatButton = ({ chatHandler }: Props) => {
  return (
    <Container onClick={chatHandler}>
      <ChatBubbleOutlineOutlinedIcon fontSize="small" />
    </Container>
  );
};

export default ChatButton;
