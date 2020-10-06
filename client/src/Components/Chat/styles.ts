import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 60px);
  z-index: var(--veryhigh);
  @media (min-width: 768px) {
    position: relative;
    display: flex;
    min-width: 300px;
    max-width: 300px;
    height: calc(100vh - 70px);
  }
  @media (min-width: 1024px) {
    position: relative;
    display: flex;
    min-width: 350px;
    max-width: 350px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: var(--darkone);
`;

export const FadedDiv = styled.div`
  position: absolute;
  height: 120px;
  width: 100%;
  top: 0;
  background-image: linear-gradient(
    to top,
    rgba(31, 34, 54, 0),
    rgba(31, 34, 54, 1) 100%
  );
`;
