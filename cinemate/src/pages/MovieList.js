import React from "react";
import BannerArea, { Col, Button } from "./MovieList.style";
import GalleryWrapper from "./MovieListGallery.style";
import Container from "../common/components/UI/Container";
import BannerBg from "../assets/Featured Image Header.png";
import { Header } from "./Header";
import { GalleryHeader } from "./GalleryHeader";
import { Card } from "../components/Card";

// import { GALLERY_DATA } from "../common/data/FoodDelivery";
export const MovieList = () => {
  // const { title, text, images } = GALLERY_DATA;

  return (
    <>
      <BannerArea className="dark:bg-gray-900">
        <div
          className="Container grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12   "
          src={BannerBg}
        >
          <Col>
            <h2 className="dark:text-white">Your Title Here</h2>
            <p className="dark:text-white">
              Fantasy | Animation | Family || Duration: 1h 52m
            </p>
            <div className="ButtonWrap">
              <Button
                variant="primary"
                className="dark:bg-white dark:text-black"
              >
                Watch Movie <i className="icon">→</i>
              </Button>
              <Button variant="outline" className="ml-5 dark:text-white">
                Watch Movie <i className="icon">→</i>
              </Button>
              {/* <span>View Info</span> */}
            </div>
          </Col>
          <Col>
            <div className="bannerMoc">
              {/* You can put additional content here, like an image or a mockup */}
            </div>
          </Col>
        </div>
      </BannerArea>

      {/* //ANCHOR - Gallery nav */}
      <GalleryHeader />

      {/* //ANCHOR - Gallery */}

      {/* <GalleryWrapper>
        <Container className="flex justify-start flex-wrap">

        </Container>
      </GalleryWrapper> */}

      <GalleryWrapper className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  ">
        <Container className="flex justify-start flex-wrap ">
          <div className="galleryBox">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
      </GalleryWrapper>
    </>
  );
};
