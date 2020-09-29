import React from "react";
import { Container, HeaderRow } from "./styles";

import TableRow from "../TableRow/TableRow";

interface Props {
  data: any[];
  displaybets: number;
}

const GameTable = ({ data, displaybets }: Props) => {
  return (
    <Container>
      <thead>
        <HeaderRow>
          <th>Game</th>
          <th>User</th>
          <th>Time</th>
          <th>Bet</th>
          <th>Payout</th>
          <th>Result</th>
          <th>Profit</th>
        </HeaderRow>
      </thead>
      <tbody>
        {data.map(({ game, user, time, bet, payout, result, profit }, i) =>
          i < displaybets ? (
            <TableRow
              key={i}
              game={game}
              user={user}
              time={time}
              bet={bet}
              payout={payout}
              result={result}
              profit={profit}
              background={i % 2 === 0}
            />
          ) : null
        )}
      </tbody>
    </Container>
  );
};

export default GameTable;
