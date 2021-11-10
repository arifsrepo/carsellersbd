import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigationbar.css';

const Navigationbar = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Car Sellers bd</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav_style">Home</NavLink>
                        <NavLink to="/explore" className="nav_style">Explore</NavLink>
                        <NavLink to="/myorder" className="nav_style">My Orders</NavLink>
                    </Nav>
                    <Nav>
                        <span className="nav_user_info">
                        {
                            user.displayName?user.displayName:user.email
                        }
                        </span>
                        {
                            user.email?<div><NavLink className="nav_style" to="/dashboard"> Dashboard</NavLink><NavLink onClick={logout} className="nav_style" to="/login">Logout</NavLink></div>:<NavLink to="/login" className="nav_style">Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigationbar;