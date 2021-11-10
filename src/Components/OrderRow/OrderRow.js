import React from 'react';
import { Button } from 'react-bootstrap';
import './OrderRow.css';

const OrderRow = (props) => {
    const{_id, address, email, name} = props.orders;
    const{img, price} = props.orders.product;
    console.log(props)

    const handleShipping = id => {
        console.log(id)
    }

    return (
        <div className="option_holder">
            <div className="option_container">
                <div>
                    <img className="option_img_div" src={img} alt="" />
                </div>
                <div className="option_text">
                    <h3>{name}</h3>
                    <h6>Shipping Address :{address}</h6>
                    <h6>User : {email}</h6>
                    <h6>Price : $ {price}</h6>
                    <Button onClick={() => handleShipping(_id)}>Shipped Now</Button>
                </div>
            </div>
        </div>
    );
};

export default OrderRow;