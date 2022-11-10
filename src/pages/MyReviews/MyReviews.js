import React, { useContext, useState, useEffect } from 'react';
import UseTitle from '../../hooks/UstTitle';
import { AuthContext } from '../../context/AuthProvider/AuthContext';
import ReviewRow from './ReviewRow';

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
            <h2 className='text-center text-xl font-bold my-4'>My Total review: {reviews.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Name</th>
                            <th>Review</th>
                            <th>Service ID</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(Row => <ReviewRow
                                key={Row._id}
                                Row={Row}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyReviews;