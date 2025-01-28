import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

export default function App() {
  const [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    console.log(newWatchlist);
    setWatchlist(newWatchlist);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchlist(filteredWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchlist));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlist={watchlist}
                  setWatchlist={setWatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                watchlist={watchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
