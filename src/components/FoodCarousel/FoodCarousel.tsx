import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1_lg from "../../images/image1_lg.jpg";
import image1_sm from "../../images/image1_sm.jpg";
import image1_xs from "../../images/image1_xs.jpg";
import image3_lg from "../../images/image3_lg.jpg";
import image3_sm from "../../images/image3_sm.jpg";
import image3_xs from "../../images/image3_xs.jpg";

import "../../styles/FoodCarousel.scss";

const FoodCarousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          srcSet={`${image1_xs} 400w, ${image1_sm} 600w, ${image1_lg} 1000w`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          srcSet={`${image3_xs} 400w, ${image3_sm} 600w, ${image3_lg} 1000w`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default FoodCarousel;
