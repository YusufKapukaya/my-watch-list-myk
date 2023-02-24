import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCart = ({ movie }) => {
  const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } =
    useContext(GlobalContext);

  const storedMovieWatched = watched.find((o) => o.id === movie.id);
  const storedMovie = watchlist.find((o) => o.id === movie.id)
    ? true
    : storedMovieWatched
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="relase-data">
            {movie.relase_date ? movie.relase_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="relase-data">
            IMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={storedMovie}
            onClick={() => addMovieToWatchlist(movie)}
          >
            zum wird gesehen hinzufügen
          </button>
          <button
            className="btn"
            disabled={storedMovieWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            zum wird gesehen hinzufügen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
