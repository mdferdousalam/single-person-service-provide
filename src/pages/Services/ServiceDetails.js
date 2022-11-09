import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData()
    const { price, serviceDetails, serviceImageUrl, title } = service;
    return (
        <div className="flex flex-col w-full p-4 border-opacity-50 mx-auto">
            <div className="grid  card bg-base-300  p-16 text-justify rounded-box place-items-center">
                <img src={serviceImageUrl} alt="" />
                <p className='text-xl p-4 font-medium'>Service: {title}</p>
                <p className='pb-4'>Price: BDT {price}</p>
                <p className='px-10'>Description: {serviceDetails}</p>
                <Link to='/services'><button className="btn btn-primary mt-8">Back</button></Link>
            </div>
            <div className="divider">Reviews</div>
            <div className="grid card bg-base-300 rounded-box place-items-center">content</div>
        </div>
    );
};

export default ServiceDetails;