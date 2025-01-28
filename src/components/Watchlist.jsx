import { useEffect, useState } from "react";
import genreids from "../utility/genre";

export default function Watchlist({
  watchlist,
  setWatchlist,
  handleRemoveFromWatchlist,
}) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [currGenre, setCurrGenre] = useState("All Genre");

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    temp = new Set(temp);
    setGenreList(["All Genre", ...temp]);
  }, [watchlist]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const setIncreasing = () => {
    const sortedIncreasing = [...watchlist].sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );
    setWatchlist(sortedIncreasing); // Update state with the sorted array
  };

  const setDecreasing = () => {
    const sortedDecreasing = [...watchlist].sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );
    setWatchlist(sortedDecreasing); // Update state with the sorted array
  };

  return (
    <>
      {/* Genre List */}
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={
              currGenre === genre
                ? "flex items-center justify-center h-[3rem] w-[9rem] mx-4 text-white bg-blue-400 rounded-xl cursor-pointer"
                : "flex items-center justify-center h-[3rem] w-[9rem] mx-4 text-white bg-gray-900/60 rounded-xl cursor-pointer"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      {/* Watchlist Movies Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="p-2 cursor-pointer" onClick={setIncreasing}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Rating</div>
                <div className="p-2 cursor-pointer" onClick={setDecreasing}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre === "All Genre") return true;
                return genreids[movieObj.genre_ids[0]] === currGenre;
              })
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr key={movieObj.id} className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem] bg bg-cover"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.title}
                    />
                    <div className="mx-10">{movieObj.title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids[0]]}</td>
                  <td
                    onClick={() => handleRemoveFromWatchlist(movieObj)}
                    className="text-red-800 cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
