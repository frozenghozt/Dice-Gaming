import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Container, Backdrop, Wrapper, CloseDiv, Content } from "./styles";
import CloseIcon from "@material-ui/icons/Close";

import { useOnClickOutside } from "../../hooks/useOnClickOutside";

interface Props {
  children: JSX.Element | JSX.Element[];
  closeModal: () => void;
}

const modalroot: HTMLElement = document.getElementById("modal") as HTMLElement;

const Portal = ({ children, closeModal }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, closeModal);

  return ReactDOM.createPortal(
    <Container>
      <Backdrop>
        <Wrapper ref={ref}>
          <CloseDiv>
            <CloseIcon
              style={{ fontSize: "21px", cursor: "pointer" }}
              onClick={closeModal}
            />
          </CloseDiv>
          <Content>{children}</Content>
        </Wrapper>
      </Backdrop>
    </Container>,
    modalroot
  );
};

export default Portal;
