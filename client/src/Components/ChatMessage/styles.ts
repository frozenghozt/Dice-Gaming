import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 3px;
  margin: 3px 0px;
`;

export const LeftContainer = styled.div`
  > img {
    height: 35px;
    width: 35px;
    border-radius: 5px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 10px;
`;

export const Username = styled.span``;

export const Message = styled.div`
  font-size: 14px;
`;
