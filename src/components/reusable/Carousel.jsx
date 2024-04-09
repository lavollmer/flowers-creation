import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Flowers from "../../../src/assets/flowerbouquet.jpg";
import ShowcaseFlowers from "../../../src/assets/showcaseflowers.jpg";

const CarouselImages = () => {
  const images = [Flowers, ShowcaseFlowers];
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

export default CarouselImages;
