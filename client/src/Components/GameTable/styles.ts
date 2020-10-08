import styled from "styled-components";

export const Container = styled.table`
  width: 95%;
  height: 100%;
  color: rgba(255, 255, 255, 0.85);
  max-width: 1100px;
`;

export const HeaderRow = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px;
  grid-auto-flow: column;
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  th {
    background-color: var(--darktwo);
    width: 100%;
    height: 100%;
    padding: 14px 14px;
    text-align: center;
    &:nth-child(1) {
      border-top-left-radius: 6px;
      display: none;
      @media (min-width: 480px) {
        display: block;
      }
    }
    &:nth-child(3) {
      display: none;
      @media (min-width: 1024px) {
        display: block;
      }
    }
    &:nth-child(6) {
      display: none;
      @media (min-width: 1024px) {
        display: block;
      }
    }
    &:nth-child(7) {
      border-top-right-radius: 6px;
    }
  }
`;
