import React from 'react';

const Movie = ({movie}) => {
    console.log(movie);
    return (
        <div>
            <h5>{movie.title}</h5>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
        </div>
    );
};

export default Movie;