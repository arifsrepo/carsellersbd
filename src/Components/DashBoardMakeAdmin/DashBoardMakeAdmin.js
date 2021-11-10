import React from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './DashBoardMakeAdmin.css';

const DashBoardMakeAdmin = () => {
    const [newadmin, setNewadmin] = useState('');

    const handleAdminEmail = e => {
        setNewadmin(e.target.value);
    }

    const handleAdminSubmit = () => {
        const user = {email:newadmin}
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setNewadmin('')
                alert('New Admin Added');
            }
        })
    }

    return (
        <Container>
        <h1>DashBoardMakeAdmin</h1>
        <Form.Label htmlFor="inputPassword5">New Admin Email</Form.Label>
        <Form.Control  type="text"  onBlur={handleAdminEmail} aria-describedby="passwordHelpBlock" />
        <br />
        <Button onClick={handleAdminSubmit} style={{float:"left"}}>Add As Admin</Button>
        </Container>
    );
};

export default DashBoardMakeAdmin;