import { useEffect, useState } from "react";
import { addMovie } from "./actions";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { store } from "./store";
import { data } from "./data";

function App() {
  const [forceUpdate, setForceUpdate] = useState(0);

  const { movies, favouriteMovies } = store.getState();

  useEffect(() => {
    // console.log(listOfMovies)
    // SUBSCRIBING to the STATE change of STORE.
    store.subscribe(() => {
      // console.log("STORE state is updated")
      setForceUpdate(Number(forceUpdate) + 1);
    });

    // DISPATCHING an Add_Movie ACTION to the REDUCER
    const listOfMovies = data;
    store.dispatch(addMovie(listOfMovies));
  }, []);

  const shuffleArray = (arr) => {
    let currentIndex = arr.length;
    let randomIndex = 0;
    if (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    return arr;
  };

  return (
    <div>
      <Navbar />

      <div
        style={{
          backgroundColor: "rgb(18,21,26)",
          minHeight: "100vh",
          paddingBottom: "30px",
        }}
      >
        <div style={{ margin: "0 15%" }}>
          <MovieList
            movies={shuffleArray(movies)}
            movieSection="Movies"
            forceUpdate={forceUpdate}
            setForceUpdate={setForceUpdate}
          />
        </div>
        <div style={{ margin: "0 15%" }}>
          <MovieList
            movies={shuffleArray(favouriteMovies)}
            movieSection="Favourites"
            forceUpdate={forceUpdate}
            setForceUpdate={setForceUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
