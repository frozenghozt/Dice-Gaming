import React, { useContext } from "react";
import {
  Container,
  Wrapper,
  LeftContainer,
  CenterContainer,
  ButtonsWrapper,
  RightContainer,
} from "./styles";
import UserContext from "../../context/UserContext";

import NavProfile from "../NavProfile/NavProfile";
import Navbar from "../Navbar/Navbar";
import Balance from "../Balance/Balance";
import Wallet from "../Wallet/Wallet";
import SignOut from "../SignOut/SignOut";
import SignIn from "../SignIn/Signin";

const Header: React.FC = () => {
  const userData = useContext(UserContext);
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <h1>skooli</h1>
        </LeftContainer>
        <CenterContainer>
          <Navbar />
          <ButtonsWrapper>
            <Balance />
            <Wallet />
            {userData?.user.user === null ? <SignIn /> : <SignOut />}
          </ButtonsWrapper>
        </CenterContainer>
        <RightContainer>
          <NavProfile />
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
