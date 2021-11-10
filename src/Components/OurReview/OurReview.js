import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './OurReview.css';

const OurReview = () => {
    const [review, setReview] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    console.log(review)
    return (
        <div>
            <h1>OurReview</h1>
            <Carousel fade>
                {
                    review.map(reviews => 
                        <Carousel.Item>
                            <img src="https://programmingtask.000webhostapp.com/p-hero/Assignment-12/ratingsbg2.jpg" alt="" />
                            <Carousel.Caption>
                                <div className="ratings_text">
                                    <h1>{reviews.email}</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis amet assumenda quas, fugiat et quia magni a sapiente facere?</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default OurReview;