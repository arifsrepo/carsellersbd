import React from 'react';
import './Option.css';
import { Button } from 'react-bootstrap';

const Option = (props) => {
    const {product, address} = props.orders;

    const handleDelet = productName => {
        const url = `https://tranquil-savannah-84839.herokuapp.com/orders/myorder/${productName}`;
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
        <div className="option_holder">
            <div className="option_container">
                <div>
                    <img className="option_img_div" src={product.img} alt="" />
                </div>
                <div className="option_text">
                    <h3>{product.name}</h3>
                    <h6>Shipping Address : {address}</h6>
                    <h6>Color : {product.color}</h6>
                    <h6>Price : $ {product.price}</h6>
                    <Button onClick={()=> handleDelet(product.name)}>Cancel Order</Button>
                </div>
            </div>
        </div>
    );
};

export default Option;