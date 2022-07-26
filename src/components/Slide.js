import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Crypto1 from '../assets/Crypto1.jpg';
import Crypto2 from '../assets/Crypto2.jpg';
import Crypto3 from '../assets/Crypto3.jpg';

const Slide = () => (
  <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          src={Crypto1}
          className="d-block w-100"
          alt="Market ratings"
        />
        <Carousel.Caption>
          <h3>This is a beautiful image</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Crypto2}
          alt="Ratings"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>This is another most fancy a</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Crypto3}
          alt="coin ratings"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>This is another Beautiful Image</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>
);

export default Slide;
