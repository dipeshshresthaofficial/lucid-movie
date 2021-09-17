
const initialStoreState = {
    movies: [],
    favouriteMovies: []
}
export const movieReducer = (state = initialStoreState, action)=>{
    switch(action.type){
        case "ADD_MOVIE":
            // console.log("ADD_Movie")
            return {
                ...state,
                movies: action.movies
            }
        case "ADD_FAVOURITE_MOVIE":
            return {
                ...state,
                favouriteMovies: [action.favouriteMovie,...state.favouriteMovies]
            }
        case "REMOVE_FAVOURITE_MOVIE":
            return{
                ...state,
                favouriteMovies:[...action.favouriteMovies]
            }
        default:
            return state;
    }
}