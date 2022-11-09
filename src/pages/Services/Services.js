import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../hooks/UstTitle';
import SingleService from './SingleService';

const Services = () => {
    UseTitle('Services')

    const services = useLoaderData();

    console.log(services)


    return (
        <div className='mx-auto'>
            <h2 className='text-center text-xl font-bold my-4'> Total Services: {services.length}</h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;