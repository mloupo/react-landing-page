import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import imageSlide from "../../assets/img/slider-1@2x.png";

const Hero = () => {
  return (
    <section className='hero'>
     <Carousel controls={false}>
        <Carousel.Item>
          <img src={imageSlide} className='d-block w-100' alt='Third slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant='primary'>Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imageSlide} className='d-block w-100' alt='Third slide' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant='primary'>Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imageSlide} className='d-block w-100' alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button variant='primary'>Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;
