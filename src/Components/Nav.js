import React from "react";
// Styled & animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Logo
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <div>
      <NavStyled>
        <img src={logo} alt="logo" />
        <h2>AllMovieDB</h2>
      </NavStyled>
    </div>
  );
};
const NavStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0rem 1rem 0rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
  h2 {
    margin-left: 1rem;
  }
`;

export default Nav;
