import React, { useContext } from "react";
import { Container, Wrapper, ProfileImg } from "./styles";
import SignOut from "../SignOut/SignOut";
import SignIn from "../SignIn/Signin";
import UserContext from "../../context/UserContext";

import Avatar from "../../assets/avatar.png";

const NavProfile = () => {
  const userData = useContext(UserContext);
  return (
    <Container>
      {userData?.user.user?.username ? (
        <Wrapper>
          <>
            <ProfileImg style={{ backgroundImage: `url(${Avatar})` }} />
            <span>{userData?.user.user?.username}</span>
          </>
          <SignOut />
        </Wrapper>
      ) : (
        <Wrapper style={{ justifyContent: "flex-end" }}>
          <SignIn />
        </Wrapper>
      )}
    </Container>
  );
};

export default NavProfile;
