import React, { useContext } from 'react';
import UseTitle from '../../hooks/UstTitle';
import { GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthContext';



const Login = () => {
    UseTitle('Login')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || "/"

    const googleProvider = new GoogleAuthProvider();


    const { providerLogin, userEmail, setuserEmail, setUser, signIn, auth } = useContext(AuthContext)




    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }


    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(from, { replace: true })


            })
            .catch((error) => {
                console.error('error:', error);
            })
    }



    const handleEmailChange = (e) => {
        setuserEmail(e.target.value)
        console.log(userEmail)
    }

    const handleForgetPassword = () => {



        if (!userEmail) {
            alert('Please enter your email')
            return
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('password reset email sent')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2 className='text-center text-xl font-bold my-4'>Login</h2>

            <button onClick={handleGoogleLogin} className='border  hover:bg-indigo-600 hover:text-white border-indigo-600 flex px-7 py-2 text-xl rounded-lg text-indigo-600 font-medium mx-auto items-center'><FaGoogle className='mr-5' />Login with Google</button>

            <h5 className='mx-auto text-center text-indigo-600 mt-6 font-medium'>---------------------------------or----------------------------------------</h5>
            <form onSubmit={handleLogin}>
                <div className='flex flex-col text-center mx-auto  w-1/3'>

                    <input onBlur={handleEmailChange} className='my-4 border-2 rounded p-2 border-indigo-900' name='email' type="email" placeholder='Email' required />
                    <input className='border-2 mb-4 rounded p-2 border-indigo-900' name='password' type="password" placeholder='Password' required />


                    <input className='border-2 rounded border-indigo-900  hover:bg-indigo-600 hover:text-white text-center mx-auto my-7 w-2/12' type="submit" value="Login" />

                    <Link onClick={handleForgetPassword}  ><p className='text-center '><small className='text-indigo-700 font-bold  hover:bg-indigo-600 hover:text-white'>Forgot your password?</small></p></Link>
                    <p className='text-center'><small>Not registered yet?<Link className='text-indigo-700  hover:bg-indigo-600 hover:text-white font-bold' to='/register'>Create an account</Link></small></p>
                </div>
            </form>
        </div>
    );
};

export default Login;