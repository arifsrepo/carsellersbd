import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cars = (props) => {
    const {_id, name, brand, img, price} = props.data;

    const handleProductDelet = productName => {
        const url = `https://tranquil-savannah-84839.herokuapp.com/admin/products/${productName}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {                             // const conf = confirm('') this function is not working without any reason
            if(data.deletedCount > 0){
                alert("Delete Successfull")
            }
        })
    }
    return (
        <div style={{textAlign:"left"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{brand}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <Link to={`/more-details/${_id}`}>
                        <Button variant="primary">More Details</Button>
                    </Link>
                    <Button variant="danger" style={{float:"right"}} onClick={() => handleProductDelet(name)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cars;