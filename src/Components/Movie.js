import React from "react";
// Styled & animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Movie = ({ title, release_date, poster_path }) => {
  return (
    <MovieStyle>
      <h2>{title}</h2>
      <p>{release_date}</p>
      <Poster>
        <img src={poster_path} alt="img" />
      </Poster>
    </MovieStyle>
  );
};

const MovieStyle = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  h2 {
  }
`;
const Poster = styled(motion.div)`
  img {
    width: 100%;
    height: 50vh;
  }
`;

export default Movie;
