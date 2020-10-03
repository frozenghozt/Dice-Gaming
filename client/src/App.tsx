import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./styled/GlobalStyles";

import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Chat from "./Components/Chat/Chat";
import UserContext from "./context/UserContext";
import SocketContext from "./context/SocketContext";
import Axios from "axios";

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
    id: string | undefined;
    username: string | undefined;
  } | null;
}

const App: React.FC = () => {
  const [socket, setSocket] = useState<any>();
  const [user, setUser] = useState<UserState>({ token: null, user: null });

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
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
    };
    checkLoggedIn();
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <AppWrapper>
            <Header />
            <StructureWrapper>
              <SocketContext.Provider value={socket}>
                <Body />
                <Chat />
              </SocketContext.Provider>
            </StructureWrapper>
          </AppWrapper>
        </UserContext.Provider>
        <GlobalStyles />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
