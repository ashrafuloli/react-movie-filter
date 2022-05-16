import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Filter";
import Movie from "./Movie";
import { motion, AnimatePresence } from "framer-motion";

function App() {
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        const apiKey = "db9833fd26bcaa394658e0c6836520cb";
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        const data = await fetch(url);
        const movies = await data.json();
        setPopular(movies.results);
        setFiltered(movies.results);
    };

    return (
        <div className="App">
            <Filter
                popular={popular}
                setFiltered={setFiltered}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
            />
            <motion.div className="popular-movies" layout>
                <AnimatePresence>
                    {filtered.map((movie) => {
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default App;
