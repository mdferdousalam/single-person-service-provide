import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const SingleService = ({ service }) => {
    const { title, serviceImageUrl, price, _id, serviceDetails } = service



    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <PhotoProvider>
                    <PhotoView src={serviceImageUrl}>
                        <figure><img className='h-64 w-full z-0' src={serviceImageUrl} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{serviceDetails.slice(0, 100) + " ..."}</p>
                    <div className="card-actions justify-end">
                        <p className='font-medium'><span >Price: BDT</span> {price}</p>
                        <button className="btn btn-primary"><Link to={`/services/${_id}`} >Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;