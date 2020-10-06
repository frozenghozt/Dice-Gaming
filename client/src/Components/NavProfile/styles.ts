import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  padding-right: 15px;
  justify-content: space-between;
  > span {
    display: none;
    @media (min-width: 480px) {
      display: block;
    }
  }
  > button {
    height: 100%;
    margin-left: auto;
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const ProfileImg = styled.div`
  display: none;
  max-height: 32px;
  min-height: 32px;
  min-width: 32px;
  background-color: #fff;
  border-radius: 6px;
  margin-right: 15px;
  background-image: cover;
  @media (min-width: 768px) {
    display: block;
  } ;
`;
