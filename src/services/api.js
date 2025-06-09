const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

//popular movie list
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

//search through movie list
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
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