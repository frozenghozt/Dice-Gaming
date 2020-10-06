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
import SignOut from "../SignOut/SignOut";
import SignIn from "../SignIn/Signin";

const Header: React.FC = () => {
  const userData = useContext(UserContext);
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <span>skooli</span>
        </LeftContainer>
        <CenterContainer>
          <Navbar />
          <ButtonsWrapper>
            {userData?.user.user === null ? (
              <SignIn />
            ) : (
              <>
                <Balance /> <SignOut />
              </>
            )}
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
