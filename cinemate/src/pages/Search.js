import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";
import GalleryWrapper from "./MovieListGallery.style";
import Container from "../common/components/UI/Container";

export function Search({ apiPath }) {
  const [searchPrams] = useSearchParams();
  const queryTerm = searchPrams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    //
    <>
      <section className=" text-3xl text-gray-700 dark:text-white py-7 mx-7">
        {movies.length === 0
          ? `No result found for  ${queryTerm}`
          : `Result for ${queryTerm}`}
      </section>

      <GalleryWrapper className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  ">
        <Container className="flex justify-start flex-wrap ">
          <div className="galleryBox">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </Container>
      </GalleryWrapper>
    </>
  );
}

export default Search;
