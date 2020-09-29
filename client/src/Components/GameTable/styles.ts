import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.85);
`;

export const HeaderRow = styled.tr`
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  th {
    background-color: var(--darktwo);
    width: 100%;
    height: 100%;
    padding: 14px 14px;
    text-align: center;
    &:nth-child(1) {
      border-top-left-radius: 6px;
    }
    &:nth-last-child(1) {
      border-top-right-radius: 6px;
    }
  }
`;
