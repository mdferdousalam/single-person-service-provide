import React from 'react';

const Quotation = () => {

    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const serviceImageUrl = form.imageurl.value;
        const price = form.price.value;
        const serviceDetails = form.serviceDetails.value;



        const serviceInfo = {
            title,
            serviceImageUrl,
            price,
            serviceDetails

        }

        fetch('https://b6a11-service-review-server-side-seven.vercel.app/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("Service added successfully")
                    event.target.reset()
                }
            })




    }

    return (
        <div>
            <h2 className='text-2xl text-center font-bold my-4'>Get A Quotation</h2>
            <form >
                <form onSubmit={handleAddService} >

                    <div className='flex flex-col text-center mx-auto  w-1/3'>
                        <input className='border-2 rounded p-2 border-indigo-900' name='title' type="text" placeholder='Enter Service Title' required />

                        <input className='border-2 rounded p-2 border-indigo-900 my-4' name='email' type="text" placeholder='Enter your email' required />

                        <input className='border-2 rounded p-2 border-indigo-900 mb-4' name='phone' type="text" placeholder='Enter your phone number' required />


                        <textarea className="textarea textarea-primary border-2 border-indigo-900" placeholder="Your Address" required name='address'></textarea>

                        <input className='border-2 rounded border-indigo-900  hover:bg-indigo-600 hover:text-white text-center mx-auto my-7 w-2/12' type="submit" value="Get Quote" />
                    </div>

                </form>
            </form>
        </div>
    );
};

export default Quotation;