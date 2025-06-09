import MovieDetails from "../components/MovieDetails"
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"


function Home(){
    const [serchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoadoing] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                //console.log(popularMovies);
                setMovies(popularMovies);
            }catch(err){
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoadoing(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleMovieSearch = async (e) => {
        e.preventDefault()
        if(!serchQuery.trim()) return
        if(loading) return

        setLoadoing(true);
        try{
            const searchResult = await searchMovies(serchQuery);
            console.log(searchResult);
            setMovies(searchResult);
            setError(null);
        }catch(err){
            console.log(err);
            setError("Failed to search movie...");
        }finally{
            setLoadoing(false);
        }
        //setSearchQuery("")
    };

    return (
        <div className="home">
            <form onSubmit={handleMovieSearch} className="search-form">
                <input type="text" placeholder="search for movie.." className="search-input" value={serchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">search</button>
            </form>
            { error && <div className="error-message"> {error} </div> }
            {loading ? (<div className="loading"> Loading.... </div>) :(
                <div className="movies-grid">
                    {movies.map((movie) => (<MovieDetails movie={movie} key={movie.id} />))}
                </div>
            ) }
        </div>
    );

}

export default Home




// const movies = [
//     { id: 1, title: "The Shawshank Redemption", genre: "Drama", release_date: "1994-09-23" },
//     { id: 2, title: "The Godfather", genre: "Crime", release_date: "1972-03-24" },
//     { id: 3, title: "The Dark Knight", genre: "Action", release_date: "2008-07-18" },
//     { id: 4, title: "Pulp Fiction", genre: "Crime", release_date: "1994-10-14" },
//     { id: 5, title: "Forrest Gump", genre: "Drama", release_date: "1994-07-06" },
//     { id: 6, title: "Inception", genre: "Sci-Fi", release_date: "2010-07-16" },
//     { id: 7, title: "Fight Club", genre: "Drama", release_date: "1999-10-15" },
//     { id: 8, title: "The Matrix", genre: "Sci-Fi", release_date: "1999-03-31" } movie.title.toLowerCase().startsWith(serchQuery) && 
// ]