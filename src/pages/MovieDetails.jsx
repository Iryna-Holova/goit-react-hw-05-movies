import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieByID } from "services/fetchMovies";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import Loader from "components/Loader/Loader";
import MovieDescription from "components/MovieDescription/MovieDescription";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setError('')
        fetchMovieByID(movieId)
            .then((data) => {
                setMovie(data);
            })
            .catch(error => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId]);

    return (
        <>
            {movie && <MovieDescription movie={movie} />}
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error}/>}
        </>
    )
};

export default MovieDetails;