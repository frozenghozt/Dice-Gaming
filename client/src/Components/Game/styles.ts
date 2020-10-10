import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 5vw;
  @media (min-width: 480px) {
  padding: 55px 5vw;
  }
`;

export const InfoButtons = styled.div`
  display: flex;
  width: 100%;
  div {
    margin: 0 15px;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
`;

export const GameButtons = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  padding: 20px 0;
  margin-top: 0;
  max-width: 1100px;
  @media (min-width: 480px) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    margin-top: 35px;
  }
  > button {
    margin-right: 12px;
    &:nth-last-child(1) {
      margin-right: 0;
      margin-left: auto;
      padding: 10px 13px 10px 10px;
    }
  }
`;
