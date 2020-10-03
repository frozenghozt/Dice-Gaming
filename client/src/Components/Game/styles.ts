import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 55px 5vw;
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
  width: 100%;
  align-items: center;
  padding: 20px 0;
  margin-top: 35px;
  max-width: 1100px;
  > button {
    margin-right: 12px;
    &:nth-last-child(1) {
      margin-right: 0;
      margin-left: auto;
      padding: 10px 13px 10px 10px;
    }
  }
`;
