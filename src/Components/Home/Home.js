import React from 'react';
import './Home.css';
import Carosel from '../Carosel/Carosel';
import MiniService from '../MiniService/MiniService';
import OurReview from '../OurReview/OurReview';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <MiniService></MiniService>
            <OurReview></OurReview>
        </div>
    );
};

export default Home;