import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import photo1 from './logo.jpg';
import photo2 from './logo.jpg';
import photo3 from './logo.jpg';

const Header2= () => {
  return (
    <div className="container">
      <Row>
        <Col xs={12} md={6}>
          <img src={photo1} alt="My Photo" className="photo" />
        </Col>
        <Col xs={12} md={6}>
          <div className="content">
            <Carousel>
              <Carousel.Item>
                <h1>Slide 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Carousel.Item>
              <Carousel.Item>
                <h1>Slide 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Carousel.Item>
              <Carousel.Item>
                <h1>Slide 3</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header2;