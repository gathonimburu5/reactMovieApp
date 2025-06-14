const API_KEY = import.meta.env.VITE_API_KEY;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`
    }
}
const BASE_URL = "https://api.themoviedb.org/3";

//popular movie list
export const getPopularMovies = async () => {
    const ENDPOINT_URL = `${BASE_URL}/movie/popular`;
    //const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const response = await fetch(ENDPOINT_URL, API_OPTIONS);
    const data = await response.json();
    //console.log(data);
    return data.results;
};

//search through movie list
export const searchMovies = async (query) => {
    const ENDPOINT_URL = `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`;
    //const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const response = await fetch(ENDPOINT_URL, API_OPTIONS);
    const data = await response.json();
    return data.results;
};

//discover movie list
export const getDiscoveredMovies = async () => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
    const data = await response.json();
    //console.log(data);
    return data.results;
}
