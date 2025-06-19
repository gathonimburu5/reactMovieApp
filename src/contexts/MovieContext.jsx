import { createContext, useState, useContext, useEffect } from "react";
import { getFavoriteMovies, createFavoriteMovie, removeFavoriteMovie } from "../services/appWrite";

const MovieContext = createContext();

export const UseMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavoriteMovie = async () => {
            try{
                const favoriteDoc = await getFavoriteMovies();
                console.log(favoriteDoc);
                setFavorites(favoriteDoc);
            }catch(error){
                console.log("error fetching favorite movies", error);
            }
        }

        // const storedFavorite = localStorage.getItem("favorites");
        // if(storedFavorite) setFavorites(JSON.parse(storedFavorite))
        fetchFavoriteMovie();
    }, []);

    useEffect(() => {
        //localStorage.setItem('favorites', JSON.stringify(favorites))

        const getFavorite = async () => {
            try{
                await getFavoriteMovies();
            }catch(error){
                console.log("error fetching favorite movies", error);
            }
        }
        getFavorite()
    }, [favorites]);

    const addToFavorite = async (movie) => {
        await createFavoriteMovie(movie)
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorite = async (movieId) => {
        //console.log(movieId);
        await removeFavoriteMovie(movieId)
        //setFavorites(prev => prev.filter(movie => movie.id !== movieId));
        const updatedFavorites = await getFavoriteMovies();
        setFavorites(updatedFavorites)
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.$id === movieId);
    }

    const value = {favorites, addToFavorite, removeFromFavorite, isFavorite}

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
}