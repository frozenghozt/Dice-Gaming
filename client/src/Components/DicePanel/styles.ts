import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  border-radius: 5px;
  background-color: #313448;
  overflow: hidden;
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 700px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  > div {
    text-align: center;
    flex: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Bet = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px 8px;
  > span {
    display: flex;
    justify-content: space-evenly;
    border-radius: 3px;
    input {
      padding: 11px 10px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      background-color: rgba(255, 255, 255, 0.08);
      width: 100%;
      /* border: 1px solid rgba(255, 255, 255, 0.08); */
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      text-align: center;
      font-size: 15px;
      &:focus {
        outline: none;
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: rgba(255, 255, 255, 0.8);
      min-width: 37px;
      background-color: rgba(255, 255, 255, 0.08);
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
      }
      &:nth-last-child(1) {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
`;

export const ProfitOnWin = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px 8px;
  input {
    padding: 11px 10px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    width: 100%;
    background-color: rgba(255, 255, 255, 0.08);
    text-align: center;
    border-radius: 4px;
    font-size: 15px;
    &:focus {
      outline: none;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 13px;
`;

export const WrapperTwo = styled.div`
  display: flex;
  width: calc(100% - 16px);
  background-color: rgba(255, 255, 255, 0.08);
  padding: 10px 5px;
  border-radius: 3px;
`;

export const RollOver = styled.div`
  display: flex;
  flex: 1;
  margin: 0px 8px;
  flex-direction: column;
  span {
    position: relative;
    display: flex;
    align-items: center;
    input {
      text-align: center;
      padding: 10px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      width: 100%;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.08);
      font-size: 15px;
      &:focus {
        outline: none;
      }
    }
    i {
      position: absolute;
      right: 12px;
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
    }
  }
`;

export const Payout = styled.div`
  display: flex;
  flex: 1;
  margin: 0px 8px;
  flex-direction: column;
  span {
    position: relative;
    display: flex;
    align-items: center;
    input {
      text-align: center;
      padding: 10px 40px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      width: 100%;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.08);
      font-size: 15px;
      &:focus {
        outline: none;
      }
    }
    i {
      position: absolute;
      right: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const WinChance = styled.div`
  display: flex;
  flex: 1;
  margin: 0px 8px;
  flex-direction: column;
  span {
    position: relative;
    display: flex;
    align-items: center;
    input {
      text-align: center;
      padding: 10px 40px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      width: 100%;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.08);
      font-size: 15px;
      &:focus {
        outline: none;
      }
    }
    i {
      position: absolute;
      right: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const TitleTwo = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  color: rgb(255, 255, 255, 0.7);
`;

export const SliderWrapper = styled.div`
  width: calc(100% - 16px);
  margin: 80px 0px 30px;
`;

export const Slider = styled.input`
  position: absolute;
  top: 0;
  appearance: none;
  width: 100%;
  height: 9px;
  cursor: pointer;
  z-index: var(--high);
  &:focus {
    outline: none;
  }
`;

export const BarReference = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 9px;
  border-radius: 100px;
  background-color: #00e449;
  left: 0;
  right: 0;
`;

export const TopBar = styled.div`
  position: absolute;
  height: 9px;
  border-radius: 100px;
  background-color: #f10260;
`;

export const SpanNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  height: 55px;
  width: 55px;
`;

export const Button = styled.button`
  margin-top: 4px;
  padding: 17px 35px;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  background-color: #272a3e;
  cursor: pointer;
`;
