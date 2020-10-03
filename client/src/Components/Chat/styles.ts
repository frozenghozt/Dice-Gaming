import styled from "styled-components";

export const Container = styled.div`
  display: none;
  position: relative;
  min-width: 350px;
  max-width: 350px;
  height: 100%;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  display: flex;
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
