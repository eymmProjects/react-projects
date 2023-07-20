import React, { useState } from "react";
import StarRating from "./StarRating";
import { TextExpander } from "./TextExpander";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) => {
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
};

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tristique ipsum. Proin non convallis enim. Proin dapibus id dolor eu tristique. Aenean cursus efficitur dignissim. Nulla pellentesque metus nec tellus fringilla, et luctus massa blandit.";

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
          <StarRating maxRating={5} />
          <TextExpander text={longText} length={50} />
        </Box>
      </Main>
    </>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img"> 🍿</span>
      <h1 className="text-2xl text-white font-bold">usePopcorn</h1>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search justify-self-center border-0 py-4 px-6 text-xl rounded-lg w-96 transition-all duration-300 text-gray-800 placeholder-gray-700 focus:outline-none focus:shadow-lg focus:translate-y[-2px]"
      type="text"
      placeholder="Search movies"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}

function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  {
    /* <div className="summary p-5 rounded-lg bg-background-100 shadow-lg">
  <h2 className="text-uppercase text-1.6rem mb-4">Summary</h2>
  <div className="flex items-center gap-6 text-1.6rem font-semibold">

  </div>
  <p className="flex items-center gap-2">

  </p>
</div>
 */
  }

  return (
    <div className="summary p-5 rounded-lg bg-background-100 shadow-lg  ">
      <h2 className="text-uppercase text-1 6rem mb-4">Movies you watched</h2>

      <div className="flex items-center gap-6 text-1 6rem font-semibold">
        <p className="flex items-center-gap-2">
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex items-center-gap-2">
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p className="flex items-center-gap-2">
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p className="flex items-center-gap-2">
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovieList({ watched }) {
  return (
    <ul className="list list-style-none p-2">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie }) {
  return (
    <li className="relative grid grid-cols-4 grid-rows-auto-auto gap-6 text-1 6rem items-center p-4 border-b border-background-100">
      <img
        className="w-full grid-row-1/-1"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <h3 className="text-1 3rem">{movie.Title}</h3>
      <div className="flex items-center gap-6">
        <p className="flex items-center gap2">
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p className="flex items-center gap2">
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p className="flex items-center gap2">
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

// <ul className="list list-style-none p-2 overflow-scroll">

// <p className="flex items-center gap-2">

// </p>
