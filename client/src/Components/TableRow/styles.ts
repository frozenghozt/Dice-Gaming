import styled from "styled-components";

export const BodyRow = styled.tr`
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  td {
    width: 100%;
    height: 100%;
    padding: 14px;
    text-align: center;
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
  }
`;
