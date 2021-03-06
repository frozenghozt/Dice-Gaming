import styled from "styled-components";

export const Container = styled.ul`
  display: none;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  li {
    margin-right: 30px;
    &:nth-last-child(1) {
      margin-right: 0;
    }
    span {
      cursor: pointer;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;
