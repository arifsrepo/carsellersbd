import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Car from '../Car/Car';
import './Explore.css';

const Explore = () => {
    const [oueServices , setOueServices] = useState([])

    useEffect(()=> {
        fetch('https://tranquil-savannah-84839.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setOueServices(data))
    },[])
    return (
        <Container>
            <div className="car_card_holder">
                {
                    oueServices.map(data => <Car key={data.id} data={data}></Car>)
                }
            </div>
        </Container>
    );
};

export default Explore;