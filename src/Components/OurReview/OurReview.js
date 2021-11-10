import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating';
import './OurReview.css';

const OurReview = () => {
    const [review, setReview] = useState([])

    useEffect(()=> {
        fetch('https://tranquil-savannah-84839.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    console.log(review)
    return (
        <div>
            <Carousel fade>
                {
                    review.map(reviews => 
                        <Carousel.Item>
                            <img src="https://programmingtask.000webhostapp.com/p-hero/Assignment-12/ratingsbg2.jpg" alt="" />
                            <Carousel.Caption>
                                <div className="ratings_text">
                                    <h1>{reviews.email}</h1>
                                    <br />
                                        <Rating
                                        initialRating={reviews.rateings}
                                        fullSymbol="fas fa-star"
                                        emptySymbol="far fa-star"
                                        readonly>
                                        </Rating>
                                    <p>{reviews.text}</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default OurReview;