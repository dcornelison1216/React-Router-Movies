import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }} key={movie.id} ><MovieDetails movie={movie} className="movie-details" /></Link>
      ))}
    </div>
  );
}

const Title = styled.h2`
color: black;
`;

const Content = styled.div`
color: black;
`;

const ActorsHeader = styled.h3`
color: black;
`;

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card" style={{ backgroundColor: 'lightskyblue', width: '75%' }} >
      <Title>{title}</Title>
      <Content>Director: <em>{director}</em></Content>
      <Content>Metascore: <strong>{metascore}</strong></Content>
      <ActorsHeader>Actors</ActorsHeader>

      {stars.map(star => (
        <Content key={star} >{star}</Content>
      ))}
    </div>
  );
}

export default MovieList;
