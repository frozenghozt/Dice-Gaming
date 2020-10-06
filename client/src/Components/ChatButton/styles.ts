import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  left: -60px;
  height: 40px;
  width: 40px;
  color: #fff;
  background-color: var(--darktwo);
  border-radius: 100%;
  z-index: var(--veryhigh);
  cursor: pointer;
`;
