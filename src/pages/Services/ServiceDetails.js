import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData()
    const { price, serviceDetails, serviceImageUrl, title } = service;
    return (
        <div className="flex flex-col w-full border-opacity-50 mx-auto">
            <div className="grid  card bg-base-300 rounded-box place-items-center">
                <img src={serviceImageUrl} alt="" />
                <p className='text-xl font-medium'>Service: {title}</p>
                <p>Price: BDT {price}</p>
                <p>Description: {serviceDetails}</p>
                <Link to='/services'><button className="btn btn-primary">Back</button></Link>
            </div>
            <div className="divider">Reviews</div>
            <div className="grid card bg-base-300 rounded-box place-items-center">content</div>
        </div>
    );
};

export default ServiceDetails;