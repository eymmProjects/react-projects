import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/images/backup.png";

export function MovieDetail() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : Backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=62e5a70438c8b8923156d26c005024d2`
      );
      const json = await response.json();

      setMovie(json);
      console.log(json);
    }
    fetchMovie();
  }, []);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={image} alt="movie.title" className="rounded" />
        </div>
        {/* // dev */}
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="my-4">{movie.overview}</p>

          {/* {movie &&
              movie.genres &&
            
              
              ))} */}
          {/* 
            {movie.genres ? (
              <span
              <p className="my-7 flex flex-wrap gap-2">
              movie.genres.map((genre) => (
                className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                key={genre.id}
              >
                {genre.name}
              </span>
              
          </p>
            ) : (
              ""
            )} */}

          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
}

export default MovieDetail;
