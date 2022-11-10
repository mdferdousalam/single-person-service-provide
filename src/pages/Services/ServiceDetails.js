import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import UseTitle from '../../hooks/UstTitle';
import ServiceReview from './ServiceReview';




const ServiceDetails = () => {
    UseTitle('Service Details')

    const service = useLoaderData()
    const { price, serviceDetails, serviceImageUrl, _id, title } = service;

    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-seven.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    return (
        <div className="flex flex-col w-full p-4 border-opacity-50 mx-auto">
            <div className="grid  card bg-base-300  p-16 text-justify rounded-box place-items-center">
                <img src={serviceImageUrl} alt="" />
                <p className='text-xl p-4 font-medium'>Service: {title}</p>
                <p className='pb-4'>Price: BDT {price}</p>
                <p className='px-10'>Description: {serviceDetails}</p>
                <div>
                    <Link to={`/services/servicedetails/${_id}`}><button className="btn btn-primary mt-8 mr-4">Add Review</button></Link>
                    <Link to='/services'><button className="btn btn-primary mt-8 px-10">Back</button></Link>
                </div>
            </div>
            <div className="divider text-xl font-medium">Reviews</div>
            <div className="grid card bg-base-300 rounded-box place-items-center">

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Review</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map((singlereview, index) => <ServiceReview
                                    key={index}
                                    singlereview={singlereview}

                                ></ServiceReview>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
};

export default ServiceDetails;