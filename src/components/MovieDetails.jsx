import "../css/MovieCard.css"
import { UseMovieContext } from "../contexts/MovieContext";

const MovieDetails = ({movie}) => {
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
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `/no-movie.png`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}> {favorite ? "❤️" : "🤍"} </button>
                </div>
            </div>

            <div className="movie-info">
                <h3> {movie.title} </h3>
                <h5> ⭐ {movie.vote_average ? movie.vote_average : "N/A"} <span>.</span> {movie.original_language} <span>.</span> {movie.release_date ? movie.release_date.split("-")[0] : "N/A"} </h5>
                {/* <p> {movie.overview} </p> */}
            </div>
        </div>
    );
}

export default MovieDetails;