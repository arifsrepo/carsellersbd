import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import Option from '../Options/Option';
import './MyOrder.css';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const {user} = useAuth()

    const url = `https://tranquil-savannah-84839.herokuapp.com/orders/myorder?email=${user.email}`
    useEffect(() => {
        fetch(url)
        .then(res=> res.json())
        .then(data => setMyOrders(data))
    }, [myOrders])

    return (
        <div>
            <h1>MyOrder : {myOrders.length}</h1>
            {
                myOrders.map(orders => <Option orders={orders}></Option>)
            }
        </div>
    );
};

export default MyOrder;