import React from 'react';
import { useParams } from 'react-router';

const Page2 = () => {
    const perams = useParams();
    console.log(perams)
    return (
        <div>
            <h1>Page2</h1>
        </div>
    );
};

export default Page2;