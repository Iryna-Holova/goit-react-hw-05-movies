import PropTypes from "prop-types";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./MovieDescription.module.css";
import Loader from "components/Loader/Loader";

const MovieDescription = ({ movie, onBackBtn }) => {
    const location = useLocation();

    const {
        poster_path,
        title,
        release_date,
        vote_average,
        overview,
        genres
    } = movie;

    const moviePoster = (poster_path) => {
        if (poster_path) {
            return `https://image.tmdb.org/t/p/w500${poster_path}`;
        } else return 'https://ranobehub.org/img/ranobe/posters/default.jpg'
    }

    return (
        <>
            <button className={styles.back_btn} onClick={onBackBtn} type="button"><IoIosArrowBack className={styles.back_icon} /> Go back</button>
            <div className={styles.description_wrapper}>
                <img className={styles.description_image} src={moviePoster(poster_path)} alt={title} />
                <div className={styles.description_info}>
                    <h2 className={styles.description_title}>{title} ({release_date.substring(0, 4)})</h2>
                    <p>User Score: {Math.round(vote_average / 10 * 100)}%</p>
                    <h3 className={styles.description_type}>Overview</h3>
                    <p>{overview || 'no overview'}</p>
                    <h3 className={styles.description_type}>Genres</h3>
                    <p>{genres.map(genre => genre.name).join(', ') || 'no genres'}</p>
                </div>
            </div>
            <nav className={styles.description_nav}>
                <NavLink className={styles.description_link} to="cast" state={location.state}>Cast</NavLink>
                <NavLink className={styles.description_link} to="reviews" state={location.state}>Reviews</NavLink>
            </nav>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
};

MovieDescription.propTypes = {
    movie: PropTypes.object.isRequired,
    onBackBtn: PropTypes.func.isRequired,
};

export default MovieDescription;