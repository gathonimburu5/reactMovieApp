import { Client, Databases, ID, Query } from "appwrite";

const USER_ID = import.meta.env.VITE_APPWORK_USER_ID;
const DATABASE_ID = import.meta.env.VITE_APPWORK_DATABASE_ID;
const FAVORITE_ID = import.meta.env.VITE_APPWORK_FAVORITE_ID;

const APPWORK_ENDPOINT = "https://cloud.appwrite.io/v1";
const client = new Client().setEndpoint(APPWORK_ENDPOINT).setProject(USER_ID);
const database = new Databases(client);

//getting favorite movies
export const getFavoriteMovies = async () => {
    try{
        return (await database.listDocuments(DATABASE_ID, FAVORITE_ID, [])).documents;
    }catch(error){
        console.log(error);
    }
}

//post favorite movies
export const createFavoriteMovie = async (movie) => {
    try{
        await database.createDocument(DATABASE_ID, FAVORITE_ID, ID.unique(), {
            title: movie.title,
            vote_average: movie.vote_average,
            original_language: movie.original_language,
            release_date: movie.release_date,
            overview: movie.overview,
            poster_url: movie.poster_path,
            movie_id: movie.id
        });
    }catch(error){
        console.log(error);
    }
}

//remove from favorite
export const removeFavoriteMovie = async (movieId) => {
    try{
        const result = await database.listDocuments(DATABASE_ID, FAVORITE_ID, [Query.equal("movie_id", movieId)]);
        if(result.documents.length > 0){
            const doc = result.documents[0];
            await database.deleteDocument(DATABASE_ID, FAVORITE_ID, doc.$id);
        }else {
            console.log(`No favorite found with movie_id: ${movieId}`);
        }
    }catch(error){
        console.log(error)
    }
}