import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/fetchMovies";
import CastInfo from "components/CastInfo/CastInfo";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import Loader from "components/Loader/Loader";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setError('')

        fetchMovieCast(movieId)
            .then(({cast}) => {
                setCast(cast);
            })
            .catch(error => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId]);

    return (
        <>
            {cast && <CastInfo cast={cast} />}
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error}/>}
        </>
    )
};

export default Cast;