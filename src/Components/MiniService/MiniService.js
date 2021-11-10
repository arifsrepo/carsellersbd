import React from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Car from '../Car/Car';
import './MiniService.css';

const MiniService = () => {
    const [miniService , setMiniService] = useState([])

    useEffect(()=> {
        fetch('https://tranquil-savannah-84839.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setMiniService(data))
    },[])

    return (
        <Container>
            <div className="car_card_holder">
                {
                    miniService.slice(0, 6).map(data => <Car key={data.id} data={data}></Car>)
                    // miniService.slice(0, 3).map(data => <Car data={data}></Car>)
                }
            </div>
        </Container>
    );
};

export default MiniService;