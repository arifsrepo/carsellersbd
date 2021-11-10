import React from 'react';
import useAuth from '../hooks/useAuth';
import './DashBoardHome.css';

const DashBoardHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>
                {user.displayName?`Hellow ${user.displayName}`:`Hellow ${user.email}`}
                <br />
            </h1>
        </div>
    );
};

export default DashBoardHome;