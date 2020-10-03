import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Titillium Web', sans-serif;
    background: rgb(31,34,54);
    background: radial-gradient(circle, rgba(40,43,66,1) 0%, rgba(31,34,54,1) 100%);
    font-size: 15px;
  }

  *, button, input {
    border: 0;
    background: none;
  }

  button:focus {
    outline: none;
  }

  ul {
    list-style: none;
  }

  :root {
    --black: #252525;
    --white: #ffffff;
    --darkone: #1f2236;
    --darktwo: #313448;
    --darkthree: #2d325a;
    --btnblue: #4d7cff;
    --btnpink: #f75165;
    --veryveryhigh: 9999;
    --veryhigh: 999;
    --high: 888;
    --medium: 777;
    --normal: 666;
  }

  ::-webkit-scrollbar-track {
    background: #1f2236;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2d424f;
    border-radius: 10px;
  }
`;
