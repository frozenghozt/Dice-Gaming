import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 15px 20px 15px;
  @media (min-width: 768px) {
    padding: 10px 10px 20px 10px;
  }
`;

export const Wrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: center;
  width: 100%;
  input {
    width: 100%;
    padding: 12px 40px 12px 12px;
    background-color: white;
    border-radius: 3px;
    color: #fff;
    background-color: #313448;
    &:focus {
      outline: none;
    }
  }
  button {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
`;
