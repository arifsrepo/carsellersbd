import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './MoreDetails.css';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const MoreDetails = () => {
    const [details, setDetails] = useState([]);
    const [address, setAddress] = useState([])
    const [subaddress, setSubAddress] = useState([])
    const {user} = useAuth();
    const perams = useParams();

    const url = `http://localhost:5000/products/${perams.carid}`;
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])

    const takingAddress = e => {
        setAddress(e.target.value);
    } 

    const takingSubAddress = e => {
        setSubAddress(e.target.value);
    } 


    const handlePlaceOrders = e => {
        const newOrder = { email:user.email, address, subaddress, name:details.name, product: details}
        console.log(newOrder)
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Order Placed');
            }
        })
        e.preventDefault()
    }

    return (
        <Container>
            <div className="details_container">
                <div className="details_img_div">
                    <img src={details.img} alt="" className="details_img" />
                </div>
                <div className="details_text">
                    <br />
                    <h1>{details.name}</h1>
                    <h4>{details.brand}</h4>
                    <h5>${details.price}</h5>
                    <br />
                    <div className="place_order_form">
                        <Form onSubmit={handlePlaceOrders}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={user.email} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control onBlur={takingAddress} placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control onBlur={takingSubAddress} placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Place Order
                            </Button>
                            <br />
                            <br />
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MoreDetails;