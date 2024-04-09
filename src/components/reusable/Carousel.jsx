import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = () => {
  const images = ["flouwerbouquet.jpg", "showcaseflowers.jpg"];
  return (
    <>
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="flower arrangement" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousel;
