import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <li>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/support">
          <span>Support</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/bonus">
          <span>Bonus</span>
        </NavLink>
      </li>
    </Container>
  );
};

export default Navbar;
