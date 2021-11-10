import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Option from '../Options/Option';
import OrderRow from '../OrderRow/OrderRow';
import './AllOrders.css';

const AllOrders = () => {
    const [ordersall, setOrdersall] = useState([]);

    useEffect(()=> {
        fetch('https://tranquil-savannah-84839.herokuapp.com/allorders')
        .then(res => res.json())
        .then(data => setOrdersall(data))
    },[])

    return (
        <div>
            {
                ordersall.map(data =><OrderRow orders={data}></OrderRow>)
            }
        </div>
    );
};

export default AllOrders;