import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import UseTitle from '../../hooks/UstTitle';

const Addreview = () => {
    UseTitle('Add Review')
    const navigate = useNavigate()
    const location = useLocation()
    const auth = getAuth();

    const email = auth.currentUser.email;
    const serviceId = location.pathname.slice(-24)




    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.userReview.value;



        const reviewInfo = { review, serviceId, email }

        fetch('https://b6a11-service-review-server-side-seven.vercel.app/addreview', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    alert("Review submitted successfully")
                    event.target.reset()
                    navigate('/services')
                }
            })



    }


    return (
        <div>
            <h2 className='text-center text-xl font-bold my-4'>Please give us a review</h2>
            <form onSubmit={handleAddReview}>

                <div className='flex flex-col text-center mx-auto  w-1/3'>
                    <textarea className="textarea textarea-primary border-2 border-indigo-900" placeholder="Your review" required name='userReview'></textarea>

                    <input className='border-2 rounded border-indigo-900  hover:bg-indigo-600 hover:text-white text-center mx-auto   my-7 w-2/12' type="submit" value="Submit" />
                </div>

            </form>

        </div>
    );
};

export default Addreview;