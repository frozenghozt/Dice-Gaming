import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./styled/GlobalStyles";

import LoadingPage from "./Components/LoadingPage/LoadingPage";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Chat from "./Components/Chat/Chat";

import UserContext from "./context/UserContext";
import SocketContext from "./context/SocketContext";

import io from "socket.io-client";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const StructureWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

interface UserState {
  token: string | null;
  user: {
    id: string;
    username: string;
    balance: number;
  } | null;
}

const App: React.FC = () => {
  const [socket, setSocket] = useState<any>();
  const [user, setUser] = useState<UserState>({ token: null, user: null });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(true);

  useEffect(() => {
    setSocket(io("https://dicebet.herokuapp.com/"));
  }, []);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token: string | null = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post("/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });

      if (tokenRes.data) {
        const userRes = await Axios.get("/users", {
          headers: { "x-auth-token": token },
        });
        setUser({
          token,
          user: userRes.data,
        });
      }
      setIsLoading(false);
    };
    checkLoggedIn();
  }, [user.token]);

  const chatOpener = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <SocketContext.Provider value={socket}>
            {isLoading ? (
              <LoadingPage />
            ) : (
              <AppWrapper>
                <Header />
                <StructureWrapper>
                  <Body />
                  {isChatOpen ? <Chat chatHandler={chatOpener} /> : null}
                </StructureWrapper>
              </AppWrapper>
            )}
          </SocketContext.Provider>
        </UserContext.Provider>
        <GlobalStyles />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
