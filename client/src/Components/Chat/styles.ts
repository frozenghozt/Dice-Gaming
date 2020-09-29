import styled from "styled-components";

export const Container = styled.div`
  display: none;
  min-width: 320px;
  height: 100%;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: var(--darkone);
`;
