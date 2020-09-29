import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5px 8px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 15px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background-color: var(--btnpink);
  }
`;
