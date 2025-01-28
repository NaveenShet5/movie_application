import React from "react";
import genreids from "../utility/genre";

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{movie.original_title}</h2>
      <p className="text-sm mb-2">{movie.overview}</p>
      <p className="text-lg font-bold">Rating: {movie.vote_average}</p>
      <p className="text-lg font-bold">Genre: {genreids[movie.genre_ids[0]]}</p>
    </div>
  );
};

export default MovieDetails;
