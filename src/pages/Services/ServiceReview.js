import React from 'react';


const ServiceReview = ({ singlereview }) => {
    const { displayName, photoURL, review } = singlereview
    console.log(singlereview)


    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{displayName}</div>

                    </div>
                </div>
            </td>
            <td>
                {review}

            </td>

        </tr>
    );
};

export default ServiceReview;