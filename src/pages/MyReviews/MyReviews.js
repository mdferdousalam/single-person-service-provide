import React, { useContext, useState, useEffect } from 'react';
import UseTitle from '../../hooks/UstTitle';
import { AuthContext } from '../../context/AuthProvider/AuthContext';

const MyReviews = () => {
    UseTitle('My Review')


    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-seven.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])



    return (
        <div>
            <h2>My review: {reviews.length}</h2>
            {
                reviews.map(review => <p>{review.review}</p>)
            }
        </div>
    );
};

export default MyReviews;