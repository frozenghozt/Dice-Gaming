import React, { useContext } from "react";
import { Container, ProfileImg } from "./styles";
import UserContext from "../../context/UserContext";

import Avatar from "../../assets/avatar.png";

const NavProfile = () => {
  const userData = useContext(UserContext);
  return (
    <Container>
      <ProfileImg style={{ backgroundImage: `url(${Avatar})` }}></ProfileImg>
      {userData?.user.user === null ? <span>{userData?.user.user}</span> : null}
    </Container>
  );
};

export default NavProfile;
