import React from 'react';
import styled from "styled-components";

const HomeButton = styled.button`
padding: 5px 10px;
background-color: lightskyblue;
`;

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <a href="http://localhost:3000/"><HomeButton>Home</HomeButton></a>
  </div>
);

export default SavedList;
