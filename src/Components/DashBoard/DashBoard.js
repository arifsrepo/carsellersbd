import React from 'react';import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './DashBoard.css';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import DashBoardPay from '../DashBoardPay/DashBoardPay';
import DashboardOrder from '../DashboardOrder/DashboardOrder';
import DashBoardReview from '../DashBoardReview/DashBoardReview';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Row>
                <Col xs={6} md={4}>
                    <div className="dashboard_side_nav">
                        <br />
                        <NavLink to={`${url}`}><Button variant="secondary" className="dash_board_btn">Home</Button></NavLink>
                        <br />
                        <br />
                        <NavLink to={`${url}/pay`}><Button variant="secondary" className="dash_board_btn">Pay</Button></NavLink>
                        <br />
                        <br />
                        <NavLink to={`${url}/myorder`}><Button variant="secondary" className="dash_board_btn">My Order</Button></NavLink>
                        <br />
                        <br />
                        <NavLink to={`${url}/ratings`}><Button variant="secondary" className="dash_board_btn">Rate Us</Button></NavLink>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <div className="admin_panale">
                    <Switch>
                        <Route exact path={path}>
                            <DashBoardHome></DashBoardHome>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <DashBoardPay></DashBoardPay>
                        </Route>
                        <Route path={`${path}/myorder`}>
                            <DashboardOrder></DashboardOrder>
                        </Route>
                        <Route path={`${path}/ratings`}>
                            <DashBoardReview></DashBoardReview>
                        </Route>
                    </Switch>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default DashBoard;