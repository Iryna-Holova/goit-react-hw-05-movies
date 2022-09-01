import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchMovieByID } from "services/fetchMovies";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import Loader from "components/Loader/Loader";
import MovieDescription from "components/MovieDescription/MovieDescription";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        setError('')
        fetchMovieByID(movieId)
            .then((data) => {
                setMovie(data);
            })
            .catch(error => {
                setError(error.message);
                navigate("/");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId, navigate]);

    const handleBackBtn = () => {
        navigate(location?.state?.from ?? "/");
    };

    return (
        <>
            {movie && <MovieDescription movie={movie} onBackBtn={handleBackBtn} />}
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error}/>}
        </>
    )
};

export default MovieDetails;