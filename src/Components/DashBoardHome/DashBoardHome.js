import React from 'react';
import useAuth from '../hooks/useAuth';
import './DashBoardHome.css';

const DashBoardHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>
                <br />
                {user.displayName?`Hellow ${user.displayName}`:`Hellow ${user.email}`}
                <br />
            </h1>
            <p>This is ypur admin dashboard. From here you can use our site more effeciently. All your necessary things are already here.</p>
        </div>
    );
};

export default DashBoardHome;