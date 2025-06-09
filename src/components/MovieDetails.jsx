import "../css/MovieCard.css"
import { UseMovieContext } from "../contexts/MovieContext";

function MovieDetails({movie}){
    const {isFavorite, addToFavorite, removeFromFavorite} = UseMovieContext();

    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e){
        e.preventDefault();
        if(favorite) removeFromFavorite(movie.id)
        else addToFavorite(movie)
     }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>🤍</button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
                <h4>{movie.without_genres}</h4>
            </div>
        </div>
    );
}

export default MovieDetails;