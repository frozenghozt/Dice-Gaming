import React, { useState, useContext, useEffect } from "react";
import { Container, Wrapper } from "./styles";
import SendIcon from "@material-ui/icons/Send";

import UserContext from "../../context/UserContext";
import SocketContext from "../../context/SocketContext";

interface MessageShape {
  user: undefined | string;
  message: string;
}

const ChatSend = () => {
  const SocketData = useContext(SocketContext);
  const UserData = useContext(UserContext);
  const [socket, setSocket] = useState<any>(null);
  const [messageObj, setMessageObj] = useState<MessageShape>({
    user: "",
    message: "",
  });

  useEffect(() => {
    setMessageObj({
      ...messageObj,
      user: UserData?.user.user?.username,
    });
  }, [UserData]);

  useEffect(() => {
    setSocket(SocketData);
  }, [socket]);

  const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageObj({ ...messageObj, message: e.target.value });
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    socket.emit("chat", messageObj);
    setMessageObj({ ...messageObj, message: "" });
  };

  return (
    <Container>
      <Wrapper onSubmit={submitHandler}>
        <input
          type="text"
          onChange={textHandler}
          placeholder="Press enter to send your message"
          value={messageObj.message}
        />
        <button type="submit">
          <SendIcon fontSize="small" />
        </button>
      </Wrapper>
    </Container>
  );
};

export default ChatSend;
