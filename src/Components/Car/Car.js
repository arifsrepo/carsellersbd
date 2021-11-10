import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Car.css';

const Car = (props) => {
    const {_id, name, brand, img, price, color} = props.data;
    return (
        <div className="car_card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{brand}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <Link to={`/more-details/${_id}`}>
                        <Button variant="primary">More Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Car;