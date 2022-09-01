import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/fetchMovies";

import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import Loader from "components/Loader/Loader";
import ReviewsInfo from "components/ReviewsInfo/ReviewsInfo";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true);
        setError('')

        fetchMovieReviews(movieId)
            .then(({ results }) => {
                if (results.length === 0) {
                    setError("We don't have any reviews for this movie")
                }
                setReviews(results);
            })
            .catch(error => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId]);

    return (
        <>
            {reviews && <ReviewsInfo reviews={reviews} />}
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error}/>}
        </>
    )
};

export default Reviews;