import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { fetchMoviesByName } from "services/fetchMovies";
import MovieList from "components/MovieList/MovieList";
import PageNavButtons from "components/PageNavButtons/PageNavButtons";
import Loader from "components/Loader/Loader";
import SearchForm from "components/SearchForm/SearchForm";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('query') ||'')
    const [page, setPage] = useState(() => (Number(searchParams.get('page')) || 1));
    const [totalPages, setTotalPages] = useState(0)
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!searchQuery) return;
        scroll.scrollToTop();
        setIsLoading(true);
        setError('')
        fetchMoviesByName(searchQuery, page)
            .then(({ results, total_pages }) => {
                setMovies(results);
                setTotalPages(total_pages);
    
                if (total_pages === 0) setError('No movies found');
            })
            .catch(error => setError(error.message))
            .finally(() => {
                setIsLoading(false);
            });
    }, [page, searchQuery]);

    const handleFormSubmit = newQuery => {
        if (newQuery === searchQuery) return;

        setSearchParams({
            query: newQuery,
            page: 1
        })
        setSearchQuery(newQuery);
        setPage(1);
    }

    const incrementPage = () => {
        setPage(prevPage => prevPage + 1);
        setSearchParams({
            query: searchQuery,
            page: (page + 1),
        })
    }

    const decrementPage = () => {
        setPage(prevPage => prevPage - 1);
        setSearchParams({
            query: searchQuery,
            page: (page - 1),
        })
    }

    return (
        <>
            <SearchForm onSubmit={handleFormSubmit}/>
            <MovieList movies={movies} />
            {error && <ErrorMessage message={error} />}
            {isLoading && <Loader/>}
            {(totalPages > 0) && <PageNavButtons
                onPageUp={incrementPage}
                onPageDown={decrementPage}
                currentPage={page}
                totalPages={totalPages}
            />}
        </>
    )
};

export default Movies;