import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MovieList } from "./MovieList";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const LandingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from an API or use dummy data
    const dummyMovies = [
      { id: 1, title: "Movie 1", description: "Description 1" },
      { id: 2, title: "Movie 2", description: "Description 2" },
      // ... add more dummy movies
    ];
    setMovies(dummyMovies);
  }, []);

  return (
    <PageContainer>
      <h1>Welcome to Movie Website</h1>
      <MovieList movies={movies} />
    </PageContainer>
  );
};

export default LandingPage;
