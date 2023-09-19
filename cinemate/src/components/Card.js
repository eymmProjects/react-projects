import React from "react";
import { Button } from "../pages/MovieList.style";

export const Card = () => {
  return (
    <div className="card shadow-sm bg-white dark:bg-gray-800">
      <img
        src="https://via.placeholder.com/400x200"
        alt="Card image"
        className="card-img-top"
      />
      <div className="card-body p-3">
        <h5 className="card-title text-black dark:text-white">Card Title</h5>
        <p className="card-text text-gray-600 dark:text-gray-300">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button
          variant="primarySmall"
          className="dark:bg-white dark:text-black mt-2"
        >
          Watch
        </Button>
      </div>
    </div>
  );
};
