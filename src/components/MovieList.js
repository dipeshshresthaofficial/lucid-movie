import React from "react";
import { colors } from "../colors";
import MovieCard from "./MovieCard";
import {ImFileEmpty} from 'react-icons/im'

export default function MovieList({
  movies,
  movieSection,
  forceUpdate,
  setForceUpdate
}) {
  return (
    <div>
      <p style={{ display: "inline-block", color: "#fff" }}>
        All{" "}
        <span style={{ color: colors.primary, display: "inline-block" }}>
          {movieSection}
        </span>
      </p>
      <div
        style={{ display: "flex", flexDirection: "row", overflowX: "scroll" }}
      >
        {movies.length === 0? <div style={{color: '#fff', fontSize: '50px'}}><ImFileEmpty /></div>:movies.map((movie, key) => {
          return (
            <MovieCard
              movie={movie}
              key={key}
              forceUpdate={forceUpdate}
              setForceUpdate={setForceUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}
