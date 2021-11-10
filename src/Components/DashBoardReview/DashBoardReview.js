import React from 'react';
import { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './DashBoardReview.css';

const DashBoardReview = () => {
    const {user} = useAuth();
    const [textRate, setTextRate] = useState([]);
    const [numberRate, setNumberRate] = useState([])
    const hanhleTextReview = e => {
        const textdata = e.target.value;
        setTextRate(textdata)
    }
    const handleRatings = e => {
        const ratedata = e.target.value;
        setNumberRate(ratedata)
    }

    const handleRatingsSubmit = () => {
        const newRatingsData = {email:user.email, text:textRate, rateings:numberRate}
        fetch('https://tranquil-savannah-84839.herokuapp.com/review',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRatingsData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Thanks For Your Feedback');
            }
        })
    }

    return (
        <div>
            <br />
            <h1>Feedback Section</h1>
            <br />
            <br />
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Feedback">
                    <Form.Control onBlur={hanhleTextReview} type="text" placeholder="Give Your Feedback" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Ratings">
                    <Form.Select onBlur={handleRatings} aria-label="Floating label select example">
                        <option>Give Us A Number</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                    </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <br />
            <Button className="ratings_submit_button" onClick={handleRatingsSubmit}>Submit</Button>
            <br />
            <br />
            <p style={{textAlign:"left"}}>Your feedback will healp us to improve our services</p>
        </div>
    );
};

export default DashBoardReview;