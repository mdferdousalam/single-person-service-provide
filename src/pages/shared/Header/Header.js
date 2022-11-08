import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider/AuthContext';
const Header = () => {

    const { logOut, user } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.error(error))
    }


    return (
        <div className="navbar bg-base-100 sticky">
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex navbar-center md:justify-between">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Electronic Security System Installer</Link>
                <div className='hidden md:inline'>
                    {
                        user?.uid ?
                            <>
                                <Link to='/home' className="btn btn-ghost normal-case text-xl ">Home</Link>
                                <Link to='/blog' className="btn btn-ghost normal-case text-xl">Blog</Link>
                                <Link to='/services' className="btn btn-ghost normal-case text-xl">Services</Link>
                                <Link to='/addservice' className="btn btn-ghost normal-case text-xl">Add Service</Link>
                                <Link to='/myreviews' className="btn btn-ghost normal-case text-xl">My Reviews</Link>
                            </>
                            :
                            <>
                                <Link to='/home' className="btn btn-ghost normal-case text-xl ">Home</Link>
                                <Link to='/blog' className="btn btn-ghost normal-case text-xl">Blog</Link>
                                <Link to='/services' className="btn btn-ghost normal-case text-xl">Services</Link>
                            </>
                    }


                </div>
            </div>
            <div className="navbar-end">

                {
                    user?.uid ?
                        <>
                            <button onClick={handleLogOut} className="btn btn-ghost font-bold">
                                <Link to='/logout'>Logout</Link>
                            </button>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                </div>
                            </button>
                        </>
                        :
                        <>
                            <button className="btn btn-ghost font-bold">
                                <Link to='/login'>Login</Link>
                            </button>
                            <button className="btn btn-ghost font-bold">
                                <Link to='/register'>Register</Link>
                            </button>
                        </>
                }



            </div>
        </div>
    );
};

export default Header;