import React from 'react';
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
    console.log(movie);
    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h5>{movie.title}</h5>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
        </motion.div>
    );
};

export default Movie;