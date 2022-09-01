import PropTypes from "prop-types";
import MovieItem from "components/MovieItem/MovieItem";
import styles from "./MovieList.module.css";


const MovieList = ({ title, movies }) => {

    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.movie_list}>
                <MovieItem movies={movies}/>
            </ul>
        </>
    )
};

MovieList.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.array.isRequired,
};

export default MovieList;