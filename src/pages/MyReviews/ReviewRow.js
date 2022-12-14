import React from 'react';

const ReviewRow = ({ Row }) => {
    const { displayName, photoURL, review, serviceId } = Row
    console.log(Row)
    return (
        <tr>
            <th>
                <button title='Delete' className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
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
            <td>{serviceId}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default ReviewRow;