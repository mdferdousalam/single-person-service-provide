import React from 'react';
import UseTitle from '../../hooks/UstTitle';
import Service from './Service';

const Home = () => {
    UseTitle('Home')
    return (
        <div >
            <h2 className='text-3xl'>My Service area</h2>
            <Service></Service>
        </div>
    );
};

export default Home;