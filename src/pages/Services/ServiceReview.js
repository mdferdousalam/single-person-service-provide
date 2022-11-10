import React from 'react';


const ServiceReview = ({ review }) => {
    return (
        <div className='flex border-2 border-indigo-600 rounded p-4'>
            <p>{review.review}</p>
            <p>Reviewer:......</p>

        </div>
    );
};

export default ServiceReview;