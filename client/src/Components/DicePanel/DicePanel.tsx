import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
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
  SpanNumber,
  Button,
} from "./styles";
import DiceImage from "../../assets/dice.svg";

import UserContext from "../../context/UserContext";
import SocketContext from "../../context/SocketContext";

interface BetShape {
  username: any;
  betAmount: any;
  rollside: string;
  rollLimit: any;
  payout: any;
  winChance: any;
}

const DicePanel = () => {
  const [socket, setSocket] = useState<any>(null);
  const data = useContext(UserContext);
  const user = data?.user.user?.username;
  const SocketData = useContext(SocketContext);

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
  const [luckyNumber, setLuckyNumber] = useState<[number, boolean] | []>([]);

  useEffect(() => {
    setSocket(SocketData);
  }, [socket]);

  // Sets the username on the bet state for sucessfull post request.
  useEffect(() => {
    setBet((bet) => ({ ...bet, username: user }));
  }, [user]);

  useEffect(() => {
    if (!socket) return;

    const setLucky = (roll: any) => {
      setLuckyNumber([roll.result, roll.isWinner]);
    };
    socket.on("roll", setLucky);
  }, [socket]);

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
                <i className="gg-math-percent"></i>
              </button>
              <button onClick={betMultiplyBy2}>
                <i className="gg-close" />
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
            <motion.div
              animate={{
                x: luckyNumber[0] === undefined ? 0 : `${luckyNumber[0]}%`,
              }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              style={{
                position: "absolute",
                width: "100%",
                left: "-30px",
                color: luckyNumber[1] ? "#00e449" : "#f10260",
                zIndex: "var(--high)",
                bottom: "10px",
                height: "55px",
              }}
            >
              {luckyNumber[0] && (
                <SpanNumber style={{ backgroundImage: `url(${DiceImage})` }}>
                  {luckyNumber[0]}
                </SpanNumber>
              )}
            </motion.div>
          </BarReference>
        </SliderWrapper>
        <Button onClick={rollDice}>ROLL DICE</Button>
      </Content>
    </Container>
  );
};

export default DicePanel;
