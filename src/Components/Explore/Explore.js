import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Car from '../Car/Car';
import './Explore.css';

const Explore = () => {
    const [oueServices , setOueServices] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setOueServices(data))
    },[])
    return (
        <Container>
            <div className="car_card_holder">
                {
                    oueServices.map(data => <Car key={data.id} data={data}></Car>)
                    // miniService.slice(0, 3).map(data => <Car data={data}></Car>)
                }
            </div>
        </Container>
    );
};

export default Explore;