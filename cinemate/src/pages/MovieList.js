import React from "react";
import BannerArea, { Col } from "./MovieList.style";
export const MovieList = () => {
  return (
    <BannerArea>
      <div
        className="Container bg-cover bg-center h-screen relative "
        style={{
          backgroundImage: `url('/src/assets/Featured Image Header.png')`,
        }}
      >
        <Col>
          <h2>Your Title Here</h2>
          <p>Your description here.</p>
          <div className="ButtonWrap">
            <button className="Button">
              Click Me <i className="icon">→</i>
            </button>
            <span>Additional Text</span>
          </div>
        </Col>
        <Col>
          <div className="bannerMoc">
            {/* You can put additional content here, like an image or a mockup */}
          </div>
        </Col>
      </div>
    </BannerArea>
  );
};
