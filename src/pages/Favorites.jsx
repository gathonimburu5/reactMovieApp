import "../css/Favorites.css"
import { UseMovieContext } from "../contexts/MovieContext";
import MovieDetails from "../components/MovieDetails";

const Favorite = () => {
    const {favorites} = UseMovieContext();
    if(favorites){
        return(
            <div className="favorites">
                <h4 className="p-0 m-0 text-lg font-bold">Your Favorites Movies</h4>
                <div className="movies-grid">
                    {favorites.map((movie) => (<MovieDetails movie={movie} key={movie.$id} />))}
                </div>
            </div>
        );
    }
    return(
        <div className="favorites-empty">
            <h4 className="text-lg font-bold text-red-600">No Favorite Movie Yet</h4>
            <p className="text-lg">start adding favorite movies and they will appear here!</p>
        </div>
    );
}

export default Favorite