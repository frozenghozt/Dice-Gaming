import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: var(--darkone);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: var(--high);
  @media (min-width: 768px) {
    height: 70px;
  }
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
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 100%;
  max-width: 200px;
  > span {
    font-size: 24px;
    @media (min-width: 768px) {
      font-size: 28px;
    }
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 2;
  padding: 0;
  @media (min-width: 480px) {
    padding: 0 20px;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  > div {
    margin-right: 0px;
    @media (min-width: 1024px) {
      margin-right: 15px;
    }
  }
  button {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  width: 280px;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 350px;
  }
  > div {
    margin-right: 15px;
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
`;
