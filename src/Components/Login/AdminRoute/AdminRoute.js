import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, admin, isLoading} = useAuth(); 
    console.log('admin P/R', admin)

    if(isLoading){
        return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        )
    }
    return (
        <Route
            {...rest}
            render={({location})=>user.email && admin.admin? children :<Redirect   
                to={{
                    pathname:'/',
                    state:{from:location}
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default AdminRoute;