import React from "react";
// Styled & animation
import styled from "styled-components";
import { motion } from "framer-motion";

const People = ({ name, id, profile_path }) => {
  return (
    <PeopleStyle>
      <h2>{name}</h2>
      <img src={profile_path} alt="img" />
    </PeopleStyle>
  );
};

const PeopleStyle = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
  }
  h2 {
  }
`;

export default People;
