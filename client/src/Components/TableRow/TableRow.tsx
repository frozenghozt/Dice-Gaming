import React from "react";
import { BodyRow } from "./styles";

interface Props {
  game: string;
  user: string;
  time: string;
  bet: number;
  payout: number;
  result: number;
  profit: number;
  background: boolean;
}

const TableRow = ({
  game,
  user,
  time,
  bet,
  payout,
  result,
  profit,
  background,
}: Props) => {
  return (
    <React.Fragment>
      <BodyRow style={{ backgroundColor: background ? "#272a3e" : "#313448" }}>
        <td>{game}</td>
        <td>{user}</td>
        <td>{time}</td>
        <td>{bet}</td>
        <td>{payout}</td>
        <td>{result}</td>
        <td>{profit}</td>
      </BodyRow>
    </React.Fragment>
  );
};

export default TableRow;
