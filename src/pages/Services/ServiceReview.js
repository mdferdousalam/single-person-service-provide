import React from 'react';


const ServiceReview = ({ review }) => {

    console.log(review)


    return (
        <div className='flex justify-evenly border-2 border-indigo-600 rounded p-4'>
            <p className='    p-4'>{review.review}</p>

            <p className='text-xl font-medium p-4'>{review?.displayName}</p>
            <img className='rounded-full h-12 w-12' src={review?.photoURL} alt="" />

        </div>
    );
};

export default ServiceReview;