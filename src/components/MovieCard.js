import React from "react";

import { BsStarFill } from "react-icons/bs";
import { colors } from "../colors";
import { store } from "./../store";
import { addFavouriteMovie, removeFavouriteMovie } from "./../actions/index";

export default function MovieCard({
  movie,
  forceUpdate,
  setForceUpdate,
  type,
}) {
  // Function to handle the Favourite and Unfavourite functionality
  const handleFavouriteClick = () => {
    // console.log(movie)
    // console.log(store.getState())
    const { favouriteMovies } = store.getState();

    if (!isFavourite()) {
      store.dispatch(addFavouriteMovie(movie));
      // console.log(store.getState());
    } else {
      const newFavouriteMoviesList = favouriteMovies.filter(
        (item) => item != movie
      );
      store.dispatch(removeFavouriteMovie(newFavouriteMoviesList));
    }
    setForceUpdate(Number(forceUpdate) + 1);
  };

  // Function to check if this particular movie is Favourite Movie or not.
  const isFavourite = () => {
    const { favouriteMovies } = store.getState();
    const result = favouriteMovies.includes(movie);
    // console.log(result);
    return result;
  };


  // Below Styled MOVIE CARD is for Results of SEARCH BAR.
  if (type === "searchBarMovieCard") {
    return (
      <>
        <div style={{display: 'flex'}}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              margin: "5px",
              borderRadius: "5px",
            }}
          />
          <div style={{ color: "#000" }}>
        <p style={{ margin: "0" }}>{movie.Title}</p>
        <p style={{ margin: "0" }}>{movie.imdbRating}</p>
        {/* <button
          style={{
            color: "#fff",
            border: "none",
            outline: "none",
            fontSize: "1.2em",
            backgroundColor: colors.background,
            cursor: "pointer",
          }}
          onClick={handleFavouriteClick}
        >
          <BsStarFill
            style={{ color: `${isFavourite() ? "yellow" : "white"}` }}
          />
        </button> */}
      </div>
        </div>
        <hr />
      </>
    );
  }

  // Below Styled MOVIE CARD is for Dashboard View.
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          width: "150px",
          height: "200px",
          objectFit: "cover",
          margin: "10px",
          borderRadius: "5px",
        }}
      />
      <div style={{ color: "#fff" }}>
        <p style={{ margin: "0" }}>{movie.Title}</p>
        <p style={{ margin: "0" }}>{movie.imdbRating}</p>
        <button
          style={{
            color: "#fff",
            border: "none",
            outline: "none",
            fontSize: "1.2em",
            backgroundColor: colors.background,
            cursor: "pointer",
          }}
          onClick={handleFavouriteClick}
        >
          <BsStarFill
            style={{ color: `${isFavourite() ? "yellow" : "white"}` }}
          />
        </button>
      </div>
    </div>
  );
}
