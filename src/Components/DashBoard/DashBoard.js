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
import DashBoardMakeAdmin from '../DashBoardMakeAdmin/DashBoardMakeAdmin';
import useAuth from '../hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AllOrders from '../AllOrders/AllOrders';

const DashBoard = () => {
    const {user, admin, logout} = useAuth();
    let { path, url } = useRouteMatch();
    console.log("admin", admin)
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
                        {
                            admin.admin?<><br /><br /><NavLink to={`${url}/adminadd`}><Button variant="secondary" className="dash_board_btn">Add Admin</Button></NavLink><br /><br /><NavLink to={`${url}/manageinventory`}><Button variant="secondary" className="dash_board_btn">Manage All Inventory</Button></NavLink><br /><br /><NavLink to={`${url}/allorders`}><Button variant="secondary" className="dash_board_btn">Manage All Orders</Button></NavLink></>:""
                        }
                        <br />
                        <br />
                        <NavLink to="/login"><Button onClick={logout} variant="secondary" className="dash_board_btn">Log Out</Button></NavLink>
                        <br />
                        <br />
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
                        <AdminRoute path={`${path}/adminadd`}>
                            <DashBoardMakeAdmin></DashBoardMakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageinventory`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/allorders`}>
                            <AllOrders></AllOrders>
                        </AdminRoute>
                    </Switch>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default DashBoard;