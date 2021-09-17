import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { store } from "../store";
import MovieCard from "./MovieCard";

export default function Navbar() {
  const [searchMovieString, setsearchMovieString] = useState("");
  const {movies, favouriteMovies} = store.getState();

  const handleSearchStringChange = (e) => {
    setsearchMovieString(e.target.value);
  };


  const filterMovies = movies.filter(item=> (
    item.Title.toLowerCase().includes(searchMovieString.toLowerCase())||
    item.Genre.toLowerCase().includes(searchMovieString.toLowerCase())||
    item.Director.toLowerCase().includes(searchMovieString.toLowerCase())||
    item.imdbRating.toLowerCase().includes(searchMovieString.toLowerCase())||
    item.Year.toLowerCase().includes(searchMovieString.toLowerCase())
  ))
  
  // console.log(filterMovies)
  // document.addEventListener('click',()=>{
  //   console.log("event listener")
  // })


  return (
    <>
      <div
        style={{
          backgroundColor: "#000",
          width: "100%",
          height: "50px",
          display: "grid",
          gridTemplateColumns: "20% 80%",
          gridGap: "20%",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#fff", marginLeft: "20px" }}>Lucid Movie</div>
        <div
          style={{
            backgroundColor: "#fff",
            width: "37%",
            height: "60%",
            padding: "2px",
            borderRadius: "5px 5px 0 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BiSearchAlt style={{ margin: "0 5px", width: "10%" }} />
          <input
            type="text"
            placeholder="Title, Genre, Director, Rating, Year"
            style={{
              border: "none",
              outline: "none",
              width: "90%",
              marginRight: "5px",
            }}
            value={searchMovieString}
            onChange={handleSearchStringChange}
          />
        </div>
        <div
          style={{
            height: "200px",
            width: "30%",
            position: "absolute",
            backgroundColor: "#fff",
            right: '30%',
            top: 45,
            visibility: `${searchMovieString.length===0? 'hidden':'visible'}`,
            borderRadius: '0 0 5px 5px',
            overflowY: 'scroll',
            paddingTop: '7px'
          }}
        >
        {
          filterMovies.map((item,key) => <MovieCard movie={item} key={key} type="searchBarMovieCard"/>)
        }
        </div>
      </div>
    </>
  );
}
