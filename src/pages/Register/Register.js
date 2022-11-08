import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthContext';
import UseTitle from '../../hooks/UstTitle';

const Register = () => {
    UseTitle('Register')


    const { createUser } = useContext(AuthContext)

    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/"

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const imageURL = form.imageURL.value
        console.log(name, email, password, imageURL);

        const userInfo = {
            name: name,
            email: email,
            password: password,
            imageURL: imageURL
        }

        // user creation 
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err);
            })


        // user info send to database via server

        fetch('https://b6a11-service-review-server-side-seven.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("User registration success")
                    event.target.reset()
                }
            })



    }




    return (
        <div>
            <h2 className='text-center text-xl font-bold my-4'>Register Here</h2>
            <form onSubmit={handleRegister}>
                <div className='flex flex-col text-center mx-auto  w-1/3'>
                    <input className='border-2 rounded p-2 border-indigo-900' name='name' type="text" placeholder='Enter Your Full Name' required />
                    <input className='my-4 border-2 rounded p-2 border-indigo-900' name='email' type="email" placeholder='Email' required />
                    <input className='border-2 mb-4 rounded p-2 border-indigo-900' name='password' type="password" placeholder='Password' required />
                    <input className='border-2 rounded p-2 border-indigo-900' name='imageURL' type="text" placeholder='Image Url' required />
                    <input className='my-4 border-2 rounded p-2 border-indigo-900' name='file' type="file" placeholder='Upload Your image' />
                    <input className='border-2 rounded border-indigo-900  hover:bg-indigo-600 hover:text-white text-center mx-auto my-7 w-2/12' type="submit" value="Submit" />
                </div>
            </form>

        </div>
    );
};

export default Register;