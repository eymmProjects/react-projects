import React, { useState } from "react";
import { Button } from "../pages/MovieList.style";
import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.png";

export const Card = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 80;
  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : Backup;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const displayExpanded = isExpanded
    ? overview
    : `${overview.substring(0, maxLength)}...`;
  return (
    <div className="card shadow-sm bg-white dark:bg-gray-800">
      <Link to={`/movie/${id}`}>
        <img
          // src="https://via.placeholder.com/400x200"
          src={image}
          alt="Card image"
          className="card-img-top"
        />
      </Link>
      <div className="card-body p-3">
        <h3 className="card-title text-black dark:text-white">
          {original_title}
        </h3>
        <p className="card-text text-gray-600 dark:text-gray-300">
          {displayExpanded}
          <button
            className="underline text-blue-500"
            onClick={toggleDescription}
          >
            {isExpanded ? " See Less" : " See More"}
          </button>
        </p>

        <Button
          to={`/movie/${id}`}
          variant="primarySmall"
          className="dark:bg-white dark:text-black mt-2"
        >
          Watch
        </Button>
      </div>
    </div>
  );
};
