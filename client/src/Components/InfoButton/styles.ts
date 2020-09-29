import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: calc(100% / 3);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 35px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: rgb(18, 22, 48);
  background: linear-gradient(
    324deg,
    rgba(31, 34, 54, 1) 18%,
    rgba(56, 60, 83, 1) 100%
  );
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  &:hover > img:nth-last-child(1) {
    transform: translateY(-6px);
  }
  img {
    transition: all 0.4s ease;
    position: absolute;
    height: 110%;
    width: auto;
    right: 0;
    &:nth-last-child(1) {
      right: -15px;
      height: 45%;
    }
  }
`;
