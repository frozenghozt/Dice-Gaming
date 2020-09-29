import React from "react";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { Link, useLocation } from "react-router-dom";

import { Btn } from "./styles";

const SignIn: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      <Link to={{ pathname: location.pathname, search: "?login=true" }}>
        <Btn>
          <PermIdentityOutlinedIcon
            style={{ fontSize: "22px", color: "white" }}
          />
        </Btn>
      </Link>
    </div>
  );
};

export default SignIn;
