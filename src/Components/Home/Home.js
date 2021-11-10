import React from 'react';
import './Home.css';
import Carosel from '../Carosel/Carosel';
import MiniService from '../MiniService/MiniService';
import OurReview from '../OurReview/OurReview';
import Colage from '../Colage/Colage';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <MiniService></MiniService>
            <Colage></Colage>
            <OurReview></OurReview>
        </div>
    );
};

export default Home;