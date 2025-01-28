import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  const handlePrev = () => {
    if (pageNo === 1) return;
    setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-wrap flex-row justify-around gap-8">
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            poster_path={movieObj.poster_path}
            name={movieObj.original_title}
            handleAddToWatchlist={handleAddToWatchlist}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            movieObj={movieObj}
            watchlist={watchlist}
          />
        ))}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Movies;
