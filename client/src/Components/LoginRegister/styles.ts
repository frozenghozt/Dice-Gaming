import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 6px 0;
  span {
    display: inline;
    cursor: pointer;
    &:nth-child(1) {
      margin-right: 12px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  > label {
    color: rgba(255, 255, 255, 0.9);
  }
  > input {
    margin: 10px 0 15px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px 8px;
    border-radius: 3px;
    color: white;
    &:focus {
      outline: none;
    }
  }
`;

export const Button = styled.button`
  padding: 8px;
  color: #fff;
  background-color: #444864;
  margin-top: 7px;
  border-radius: 3px;
  cursor: pointer;
`;
