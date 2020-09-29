import React, { useState, useContext, useEffect } from "react";
import io from "socket.io-client";
import UserContext from "../../context/UserContext";
import {
  Container,
  Content,
  Bet,
  ProfitOnWin,
  Wrapper,
  WrapperTwo,
  RollOver,
  Payout,
  WinChance,
  Title,
  TitleTwo,
  SliderWrapper,
  Slider,
  BarReference,
  TopBar,
  RollSlick,
  Button,
} from "./styles";

interface BetShape {
  username: any;
  betAmount: any;
  rollside: string;
  rollLimit: any;
  payout: any;
  winChance: any;
}

const socket = io("http://localhost:5000");

const DicePanel = () => {
  // User Context with token and usename.
  const data = useContext(UserContext);
  const user = data?.user.user?.username;

  // Bet state for post request. Must have username, betAmount, rollside and rollLimit for sucessful post request.
  const [bet, setBet] = useState<BetShape>({
    username: null,
    betAmount: "0.00000000",
    rollside: "over",
    rollLimit: "50",
    payout: "2",
    winChance: "50",
  });

  // Luckynumber will set here after getting server response.
  const [luckyNumber, setLuckyNumber] = useState(null);

  // Sets the username on the bet state for sucessfull post request.
  useEffect(() => {
    setBet((bet) => ({ ...bet, username: user }));
  }, [user]);

  useEffect(() => {
    const setLucky = (roll: any) => {
      setLuckyNumber(roll.result);
    };

    socket.on("roll", setLucky);
  }, []);

  // Profit, Payout and Winchance logic for input values.
  const inputvals = {
    profit:
      bet.rollside === "over"
        ? (
            (bet.betAmount * (100 / (100 - bet.rollLimit)) - bet.betAmount) *
            0.99
          ).toFixed(8)
        : (
            (bet.betAmount * (100 / bet.rollLimit) - bet.betAmount) *
            0.99
          ).toFixed(8),
    payout:
      bet.rollside === "over"
        ? Math.round((100 / (100 - bet.rollLimit)) * 1000) / 1000
        : Math.round((100 / bet.rollLimit) * 1000) / 1000,
    winchace:
      bet.rollside === "over"
        ? ((100 - bet.rollLimit) * 100) / 100
        : (bet.rollLimit * 100) / 100,
  };

  // Bet amount controller (input)
  const betAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBet({ ...bet, betAmount: e.target.value });
  };

  // Bet amount x2 controller (input)
  const betMultiplyBy2 = () => {
    setBet({ ...bet, betAmount: bet.betAmount * 2 });
  };

  // Bet amount 1/2 controller (input)
  const betDivideBy2 = () => {
    setBet({ ...bet, betAmount: bet.betAmount / 2 });
  };

  // Roll limit controller (input)
  const sliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBet({
      ...bet,
      rollLimit: e.target.value,
    });
  };

  // Roll limit changer controller (input)
  const rollOverChange = () => {
    setBet({
      ...bet,
      rollside: "under",
      rollLimit: 100 - parseInt(bet.rollLimit),
    });
  };

  // Roll limit changer controller (input)
  const rollUnderChange = () => {
    setBet({
      ...bet,
      rollside: "over",
      rollLimit: 100 - parseInt(bet.rollLimit),
    });
  };

  // Submit bet and get luckynumber (post request)
  const rollDice = () => {
    socket.emit("roll", bet);
  };

  // Socket listener

  return (
    <Container>
      <Content>
        <Wrapper>
          <Bet>
            <Title>
              <span>Bet Amount</span>
              <span>$0.00</span>
            </Title>
            <span>
              <input
                type="number"
                min="0.00000000"
                step={1e-6}
                onChange={betAmountChange}
                value={bet.betAmount}
              />
              <button onClick={betDivideBy2}>
                <span>%</span>
              </button>
              <button onClick={betMultiplyBy2}>
                <span>X</span>
              </button>
            </span>
          </Bet>
          <ProfitOnWin>
            <Title>
              <span>Profit on Win</span>
              <span>$0.00</span>
            </Title>
            <span>
              <input value={inputvals.profit} readOnly />
            </span>
          </ProfitOnWin>
        </Wrapper>
        <WrapperTwo>
          <RollOver>
            <TitleTwo>
              {bet.rollside === "over" ? "Roll Over" : "Roll Under"}
            </TitleTwo>
            <span>
              <input type="button" value={bet.rollLimit} readOnly />
              <i
                className="gg-arrows-exchange-alt"
                onClick={
                  bet.rollside === "over" ? rollOverChange : rollUnderChange
                }
              />
            </span>
          </RollOver>
          <Payout>
            <TitleTwo>Payout</TitleTwo>
            <span>
              <input type="number" value={inputvals.payout} readOnly />
              <i className="gg-close" />
            </span>
          </Payout>
          <WinChance>
            <TitleTwo>Win Chance</TitleTwo>
            <span>
              <input type="number" value={inputvals.winchace} readOnly />
              <i className="gg-math-percent" />
            </span>
          </WinChance>
        </WrapperTwo>
        <SliderWrapper>
          <BarReference>
            <Slider
              type="range"
              min="1"
              max="99"
              onChange={sliderChange}
              value={bet.rollLimit}
            />
            <TopBar
              style={{
                width:
                  bet.rollside === "over"
                    ? `${bet.rollLimit}%`
                    : `${100 - bet.rollLimit}%`,
                left: bet.rollside === "over" ? "0" : "auto",
                right: bet.rollside === "over" ? "auto" : "0",
              }}
            />
            <RollSlick style={{ left: `calc(${luckyNumber}% - 15px)` }}>
              <span>{luckyNumber}</span>
            </RollSlick>
          </BarReference>
        </SliderWrapper>
        <Button onClick={rollDice}>ROLL DICE</Button>
      </Content>
    </Container>
  );
};

export default DicePanel;
