import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: var(--darkone);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: var(--high);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 0 30px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  > div {
    margin-right: 15px;
    &:nth-last-child(1) {
      margin-right: 0;
    }
`;

export const RightContainer = styled.div`
  display: flex;
  width: 320px;
  height: 100%;
  > div {
    margin-right: 15px;
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
`;
