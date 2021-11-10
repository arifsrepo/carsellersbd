import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [toggleLogin, setToggleLogin] = useState(false)
    const {user, email, setUser, googleSignIn, handleEmailSignIn, handleEmailReg, isLoading, setEmail, setPassword, setIsLoading, addUsertODB, upsertGoogleLog, error, setError} = useAuth();  
    const location = useLocation();
    const history = useHistory();
    const redirectTo = location.state?.from.pathname || '/home';

    if(isLoading){
        return <Spinner animation="border" />
    }

    const toggleLogIn = e => {
        const toggle = e.target.checked;
        setToggleLogin(toggle);
    }

    const userEmail = e => {
        setEmail(e.target.value);
        setError([])
    }

    const userPass = e => {
        setPassword(e.target.value);
        setError([])
    }
    
    const handleForm = e => {
        if(toggleLogin){
            setError([])
            handleEmailReg()
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              setUser(user);
              addUsertODB(email)
              history.push(redirectTo)
              setIsLoading(false);
              e.reset()
            })
            .catch((error) => {
              const errorMessage = error.message;
              setError(errorMessage)
              setIsLoading(false);
            });
        } else {
            setError([])
            handleEmailSignIn()
            .then((userCredential) => {
              const user = userCredential.user;
              setUser(user);
              history.push(redirectTo)
              setIsLoading(false);
              e.reset()
            })
            .catch((error) => {
              const errorMessage = error.message;
              setError(errorMessage)
              setIsLoading(false);
            });
        }
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        setError([])
        setIsLoading(true);
        googleSignIn()
        .then((result) => {
            const user = result.user;
            setUser(user)
            setEmail(user.email)
            upsertGoogleLog(user.email)
            setIsLoading(false)
            history.push(redirectTo)
          })
    }

    return (
        <div className="login_div">
            <Container>
            <br />
            <br />
                <Row>
                    <Col xs={12} md={6}>
                        <div className="login_blur_div">
                            <Form onSubmit={handleForm}>
                                {
                                    toggleLogin?<h1>Please Register</h1>:<h1>Please Login</h1>
                                }
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={userEmail} type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={userPass} type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check onChange={toggleLogIn} type="checkbox" label="New User?" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                {
                                    toggleLogin?"Register":"Login"
                                }
                                </Button>
                                <br />
                                    {
                                        error && <Form.Text className="erroe_massage">{error}</Form.Text>
                                    }
                        </Form>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Text>
                            <h1 style={{color:"white"}}>{user.email}</h1>
                        </Form.Text>
                        <br />
                        <Button type="submit" className="google_login" onClick={handleGoogleSignIn}>Login With Google</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;