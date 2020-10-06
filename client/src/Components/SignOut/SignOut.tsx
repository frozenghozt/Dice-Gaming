import React, { useContext } from "react";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import UserContext from "../../context/UserContext";
import { Btn } from "./styles";

const SignOut: React.FC = () => {
  const userData = useContext(UserContext);

  const logout = () => {
    userData?.setUser({ token: null, user: null });
    localStorage.setItem("auth-token", "");
  };

  return (
    <Btn onClick={logout}>
      <ExitToAppOutlinedIcon style={{ fontSize: "22px", color: "white" }} />
    </Btn>
  );
};

export default SignOut;
