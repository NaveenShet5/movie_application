import React from "react";

const MovieCard = ({
  movieObj,
  poster_path,
  name,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) => {
  const doesContain = (movieObj) => {
    return watchlist.some((movie) => movie.id === movieObj.id);
  };

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl relative cursor-pointer hover:scale-105 duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {/* Add/Remove Button */}
      {doesContain(movieObj) ? (
        <div
          className="m-4 h-8 w-8 flex items-center justify-center rounded-lg bg-gray-900/60 text-white"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveFromWatchlist(movieObj);
          }}
        >
          &#10060;
        </div>
      ) : (
        <div
          className="m-4 h-8 w-8 flex items-center justify-center rounded-lg bg-gray-900/60 text-white"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToWatchlist(movieObj);
          }}
        >
          &#128512;
        </div>
      )}

      {/* Movie Name */}
      <div className="absolute bottom-0 left-0 right-0 text-center bg-gray-900/60 text-white text-xl p-2">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
