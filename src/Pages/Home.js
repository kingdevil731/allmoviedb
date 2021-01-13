import React, { useState, useEffect } from "react";
// Components
import Nav from "../Components/Nav";
import Movie from "../Components/Movie";
import Tv from "../Components/Tv";
import People from "../Components/People";
// Api
import {
  getPopularMovies,
  getImage,
  poster_sizes,
  getTvAirToday,
  getTvOnAir,
  getPopularTv,
  getTopRatedTv,
  profile_sizes,
  getPopularPeople,
} from "../api";
// axios
import axios from "axios";
// styling and motion
import styled from "styled-components";
import { motion } from "framer-motion";

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [tvAirToday, setTvAirToday] = useState();
  const [tvOnAir, setTvOnAir] = useState();
  const [tvPopular, setTvPopular] = useState();
  const [tvTopRated, setTvTopRated] = useState();
  const [popularPeople, setPopularPeople] = useState();

  useEffect(() => {
    axios.get(getPopularMovies).then((data) => {
      setPopularMovies(data.data.results);
    });
    axios.get(getTvAirToday).then((data) => {
      setTvAirToday(data.data.results);
    });
    axios.get(getTvOnAir).then((data) => {
      setTvOnAir(data.data.results);
    });
    axios.get(getPopularTv).then((data) => {
      setTvPopular(data.data.results);
    });
    axios.get(getTopRatedTv).then((data) => {
      setTvTopRated(data.data.results);
    });
    axios.get(getPopularPeople).then((data) => {
      setPopularPeople(data.data.results);
    });
  }, []);
  return (
    <MoviesList>
      <Nav />
      <h2>Top Rated Movies</h2>
      <h2>Upcoming movies</h2>
      <h2>Now playing movies</h2>
      <h2>Popular Movies</h2>
      <Movies>
        {popularMovies
          ? popularMovies.map((movie) => (
              <Movie
                title={movie.title}
                key={movie.id}
                release_date={movie.release_date}
                poster_path={getImage(poster_sizes[4], movie.poster_path)}
              />
            ))
          : ""}
      </Movies>
      <h2>Popular TV shows</h2>
      <Movies>
        {tvPopular
          ? tvPopular.map((item) => (
              <Tv
                title={item.name}
                original_title={item.original_name}
                key={item.id}
                popularity={item.popularity}
                release_date={item.first_air_date}
                poster_path={getImage(poster_sizes[4], item.poster_path)}
              />
            ))
          : ""}
      </Movies>
      <h2>Top rated TV shows</h2>
      <Movies>
        {tvTopRated
          ? tvTopRated.map((item) => (
              <Tv
                title={item.name}
                original_title={item.original_name}
                key={item.id}
                popularity={item.popularity}
                release_date={item.first_air_date}
                poster_path={getImage(poster_sizes[4], item.poster_path)}
              />
            ))
          : ""}
      </Movies>
      <h2>On the air TV shows</h2>
      <Movies>
        {tvOnAir
          ? tvOnAir.map((item) => (
              <Tv
                title={item.name}
                original_title={item.original_name}
                key={item.id}
                popularity={item.popularity}
                release_date={item.first_air_date}
                poster_path={getImage(poster_sizes[4], item.poster_path)}
              />
            ))
          : ""}
      </Movies>
      <h2>Airing today TV shows</h2>
      <Movies>
        {tvAirToday
          ? tvAirToday.map((item) => (
              <Tv
                title={item.name}
                original_title={item.original_name}
                key={item.id}
                popularity={item.popularity}
                release_date={item.first_air_date}
                poster_path={getImage(poster_sizes[4], item.poster_path)}
              />
            ))
          : ""}
      </Movies>
      <h2>Popular people</h2>
      <People>
        {popularPeople
          ? popularPeople.map((item) => (
              <Tv
                name={item.name}
                key={item.id}
                profile_path={getImage(profile_sizes[2], item.profile_path)}
              />
            ))
          : ""}
      </People>
    </MoviesList>
  );
};
const MoviesList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    color: blueviolet;
    margin: 2rem 0rem 2rem 0rem;
  }
`;
const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
  h2 {
    font-size: 2rem;
    padding: 1rem 1rem;
    margin: 0;
    color: black;
  }
`;

export default Home;
