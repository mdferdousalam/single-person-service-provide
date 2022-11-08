import React from 'react';
import UseTitle from '../../hooks/UstTitle';

const Home = () => {
    UseTitle('Home')
    return (
        <div >
            <h2 className='text-3xl'>Home components</h2>
        </div>
    );
};

export default Home;