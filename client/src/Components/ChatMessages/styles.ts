import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  width: 100%;
  padding: 20px 15px 10px 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (min-width: 768px) {
    padding: 20px 10px 10px 10px;
  }
`;
