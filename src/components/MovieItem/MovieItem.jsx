import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./MovieItem.module.css";

const MovieItem = ({ movies }) => {
    const location = useLocation();

    const moviePoster = (poster_path) => {
        if (poster_path) {
            return `https://image.tmdb.org/t/p/w500${poster_path}`;
        } else return 'https://ranobehub.org/img/ranobe/posters/default.jpg'
        

    }
    return (
        <>
            {movies.map(({ id, title, poster_path }) => {
                return <li className={styles.movie} key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                        <img className={styles.movie_poster} src={moviePoster(poster_path)} alt={title} />
                        <h2 className={styles.movie_title}>{title}</h2>
                    </Link>
                </li>
            })}
        </>
    )
};

MovieItem.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default MovieItem;