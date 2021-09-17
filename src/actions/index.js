// Action types
const ADD_MOVIE = "ADD_MOVIE";
const ADD_FAVOURITE_MOVIE = "ADD_FAVOURITE_MOVIE";
const REMOVE_FAVOURITE_MOVIE = "REMOVE_FAVOURITE_MOVIE";


// Action Creators
export const addMovie = (movieList)=>{
    return({
        "type": ADD_MOVIE,
        "movies": movieList
      })
}
export const addFavouriteMovie = (movie)=>{
    return({
        "type": ADD_FAVOURITE_MOVIE,
        "favouriteMovie": movie
      })
}

export const removeFavouriteMovie = (movie)=>{
  return({
    "type": REMOVE_FAVOURITE_MOVIE,
    "favouriteMovies": movie
  })
}