import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { fetchTrendingMovies } from "services/fetchMovies";
import MovieList from "components/MovieList/MovieList";
import Loader from "components/Loader/Loader";
import PageNavButtons from "components/PageNavButtons/PageNavButtons";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(() => (Number(searchParams.get('page')) || 1));
    const [totalPages, setTotalPages] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        scroll.scrollToTop();
        setIsLoading(true)
        fetchTrendingMovies(page)
            .then(({ results, total_pages }) => {
                setMovies(results);
                setTotalPages(total_pages);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsLoading(false);
            })
    }, [page]);

    const incrementPage = () => {
        setPage(prevPage => prevPage + 1);
        setSearchParams({ page: (page + 1) })
    }

    const decrementPage = () => {
        setPage(prevPage => prevPage - 1);
        setSearchParams({ page: (page - 1) })
    }

    return (
        <>
            <MovieList title='Trending today' movies={movies} />
            {isLoading && <Loader/>}
            {totalPages && <PageNavButtons
                onPageUp={incrementPage}
                onPageDown={decrementPage}
                currentPage={page}
                totalPages={totalPages}
            />}
        </>
    )
};

export default Home;