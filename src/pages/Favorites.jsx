import "../css/Favorites.css"
import { UseMovieContext } from "../contexts/MovieContext";
import MovieDetails from "../components/MovieDetails";

const Favorite = () => {
    const {favorites} = UseMovieContext();
    if(favorites){
        return(
            <div className="favorites">
                <h4>Your Favorites Movies</h4>
                <div className="movies-grid">
                    {favorites.map((movie) => (<MovieDetails movie={movie} key={movie.$id || movie.movie_id} />))}
                </div>
            </div>
        );
    }
    return(
        <div className="favorites-empty">
            <h4>No Favorite Movie Yet</h4>
            <p>start adding favorite movies and they will appear here!</p>
        </div>
    );
}

export default Favorite