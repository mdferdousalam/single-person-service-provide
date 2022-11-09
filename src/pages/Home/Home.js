import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../hooks/UstTitle';
import SingleService from '../Services/SingleService';
import Quotation from './Quote/Quotation';


const Home = () => {
    UseTitle('Home')
    const services = useLoaderData()
    return (
        <div >
            <h2 className='text-2xl text-center font-bold my-4'>My Service Area</h2>
            <div className='grid  p-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }

            </div>
            <div className='mt-10 grid grid-cols-1 w-1/4 p-4 mx-auto'>
                <button className="btn btn-primary"><Link className='' to='/services'>See All Services</Link></button>
            </div>

            <Quotation></Quotation>

        </div>
    );
};

export default Home;