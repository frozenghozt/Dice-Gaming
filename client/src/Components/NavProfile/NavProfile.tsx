import React, { useContext } from "react";
import { Container, ProfileImg } from "./styles";
import UserContext from "../../context/UserContext";

import Avatar from "../../assets/avatar.png";

const NavProfile = () => {
  const userData = useContext(UserContext);
  return (
    <Container>
      <ProfileImg style={{ backgroundImage: `url(${Avatar})` }}></ProfileImg>
      <span>{userData?.user.user?.username}</span>
    </Container>
  );
};

export default NavProfile;
