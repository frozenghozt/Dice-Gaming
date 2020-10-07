import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: var(--darkone);
  @media (min-width: 768px) {
    display: none;
  }
  z-index: var(--veryhigh);
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 0 23px;
  span {
    color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
  }
`;
