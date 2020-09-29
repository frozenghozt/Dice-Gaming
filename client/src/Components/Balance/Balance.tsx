import React from "react";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import { Container } from "./styles";

const Balance: React.FC = () => {
  return (
    <Container>
      <MonetizationOnOutlinedIcon
        style={{ fontSize: "22px", marginRight: "5px", marginLeft: "-2px" }}
      />
      750 842
    </Container>
  );
};

export default Balance;
