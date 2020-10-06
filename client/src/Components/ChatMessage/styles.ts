import styled from "styled-components";

export const LeftContainer = styled.div`
  > img {
    height: 35px;
    width: 35px;
    border-radius: 5px;
    margin-top: 5px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 10px;
`;

export const Username = styled.span`
  font-weight: 600;
`;

export const Message = styled.div`
  font-size: 14px;
`;
