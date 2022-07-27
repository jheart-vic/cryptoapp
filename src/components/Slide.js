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
          <h3 style={{ fontSize: '4rem', color: 'purple' }}>Become your best</h3>
          <p style={{ fontSize: '4rem', color: 'purple' }}>Nothing can stop you when crypto has your back</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Crypto2}
          alt="Ratings"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: '4rem', color: 'purple' }}>A new lifestyle</h3>
          <p style={{ fontSize: '4rem', color: 'purple' }}>Your dream lifestyle is possible with crypto</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Crypto3}
          alt="coin ratings"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: '4rem', color: 'purple' }}>Life isn&apos;t easy you just got stronger</h3>
          <p style={{ fontSize: '2rem', color: 'purple' }}>Grow and become stronger everyday with crypto</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>
);

export default Slide;
