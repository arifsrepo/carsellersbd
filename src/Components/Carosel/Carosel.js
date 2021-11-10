import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carosel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://programmingtask.000webhostapp.com/p-hero/Assignment-12/Carosel/img-1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Welcome to our carhub</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://programmingtask.000webhostapp.com/p-hero/Assignment-12/Carosel/img-2.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Worlds Best Cars Are Here</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://programmingtask.000webhostapp.com/p-hero/Assignment-12/Carosel/img-3.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Our Great Team Is Only For You</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carosel;