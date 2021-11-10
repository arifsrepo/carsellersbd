import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Cars from '../Cars/Cars';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [allproduct , setAllproduct] = useState([])
    const nameRef = useRef();
    const brandRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();

    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setAllproduct(data))
    },[allproduct])

    const handleAddOrder = e => {
        const name = nameRef.current.value;
        const brand = brandRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const newAddData = {name, brand, price, img}
        console.log(newAddData)
        fetch('http://localhost:5000/newproducts',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAddData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('New Product Added');
            }
        })
        e.preventDefault()
    }

    return (
        <Container>
        <br />
        <h3>Add New Products</h3>
        <Form onSubmit={handleAddOrder}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control ref={nameRef} name="name" type="text" placeholder="Enter Product Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={brandRef} name="brand" type="text" placeholder="brand" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={priceRef} name="price" type="number" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={imgRef} name="img" type="text" placeholder="Image Link" />
            </Form.Group>
            <Button style={{float:"left"}} variant="primary" type="submit">
                Submit
            </Button>
            <br />
            <br />
        </Form>
            <div className="car_card_holder">
                {
                    allproduct.map(data => <Cars key={data.id} data={data}></Cars>)
                }
            </div>
        </Container>
    );
};

export default ManageAllOrders;