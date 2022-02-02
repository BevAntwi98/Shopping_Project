import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";


import '../../Design/Carousel.css';
import image1 from "../images/ph1.jpeg"; // Import image
import image2 from "../images/ph2.jpeg"; // Import image
import image3 from "../images/ph3.jpeg"; // Import image
import image4 from "../images/sale.jpg"; 

function CarouselContainer() {
  const CAROUSEL_INTERVAL = 4000;


  return (
    <div className="carousel-container">
      <Carousel  fade={true} pause={false} >
        <Carousel.Item interval={CAROUSEL_INTERVAL}>
          <img className="carousel-image"src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={CAROUSEL_INTERVAL}>
          <img className="carousel-image"src={image2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={CAROUSEL_INTERVAL}>
          <img className="carousel-image"src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={CAROUSEL_INTERVAL}>
          <img className="carousel-image"src={image4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
      
   
  );
}

export default CarouselContainer;

// Tutorial Used https://www.youtube.com/watch?v=5RNAg4r_f4c&t=170s
