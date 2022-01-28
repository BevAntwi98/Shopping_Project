import React from 'react';
import { Carousel } from 'react-bootstrap'; 

import image1 from '../images/ph1.jpeg'; // Import image
import image2 from '../images/ph2.jpeg'; // Import image
import image3 from '../images/ph3.jpeg'; // Import image


function CarouselContainer(){
  return (
    <Carousel fade={true} pause={false}> 
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;


// Tutorial Used https://www.youtube.com/watch?v=5RNAg4r_f4c&t=170s