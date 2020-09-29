import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: var(--veryhigh);
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(14, 18, 36, 0.7);
  backdrop-filter: blur(2px);
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: rgb(177, 186, 211);
  background-color: var(--darkone);
  border-radius: 7px;
  width: 450px;
  overflow-y: auto;
  padding: 9px;
`;

export const CloseDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: rgb(177, 186, 211);
  background-color: var(--darkone);
  height: 100%;
  border-radius: 7px;
  width: 100%;
  overflow-y: auto;
  padding: 10px;
`;
