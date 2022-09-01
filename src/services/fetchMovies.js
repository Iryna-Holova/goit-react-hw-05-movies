import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '8b67a89c3b3cf87de76d1484537ca872';
axios.defaults.baseURL = URL;

export async function fetchTrendingMovies(page) {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${page}`);
    return response.data;
};
    
export async function fetchMoviesByName(query, page) {
    const searchParams = new URLSearchParams({
        language: 'en-US',
        page,
        include_adult: false,
    });

    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&${searchParams}`);
    return response.data;
};

export async function fetchMovieByID(movieID) {
    const response = await axios.get(`/movie/${movieID}?api_key=${API_KEY}`);
    return response.data;
};

export async function fetchMovieCast(movieID) {
    const response = await axios.get(`/movie/${movieID}/credits?api_key=${API_KEY}`);
    return response.data;
}

export async function fetchMovieReviews(movieID) {
    const response = await axios.get(`/movie/${movieID}/reviews?api_key=${API_KEY}`);
    return response.data;
}