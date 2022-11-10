import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider/AuthContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const { logOut, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/home')
            })
            .catch((error) => console.error(error))
    }


    return (
        <div className="navbar bg-base-100 pt-10 sticky z-50">
            <div className="navbar-start">
                <div className="dropdown md:hidden z-10">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="z-20 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='hover:bg-indigo-600 hover:text-white' to='/home'>Home</Link></li>
                        <li><Link className='hover:bg-indigo-600 hover:text-white' to='/blog'>Blog</Link></li>
                        {/* <li><Link className='hover:bg-indigo-600 hover:text-white' to='/services'>Services</Link></li> */}
                        <li><Link className='hover:bg-indigo-600 hover:text-white' to='/addservice'>Add Service</Link></li>
                        <li><Link className='hover:bg-indigo-600 hover:text-white' to='/myreviews'>My Reviews</Link></li>
                        <li><Link className='hover:bg-indigo-600 hover:text-white' to='/login'>Login</Link></li>
                        <li><Link className='hover:bg-indigo-600 hover:text-white' to='/register'>Register</Link></li>
                        <li><Link className='hover:bg-indigo-600 hover:text-white' onClick={handleLogOut} >Log out</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex navbar-center md:justify-between">
                <Link to='/' className="btn btn-ghost normal-case text-xl hover:bg-indigo-600 hover:text-white">Electronic Security System Installer</Link>
                <div className='hidden md:inline'>
                    {
                        user?.uid ?
                            <>
                                <Link to='/home' className="btn btn-ghost normal-case text-xl hover:bg-indigo-600 hover:text-white ">Home</Link>
                                <Link to='/blog' className="btn btn-ghost normal-case text-xl hover:bg-indigo-600 hover:text-white">Blog</Link>
                                {/* <Link to='/services' className="btn btn-ghost normal-case text-xl hover:bg-indigo-600 hover:text-white">Services</Link> */}
                                <Link to='/addservice' className="btn btn-ghost normal-case text-xl hover:bg-indigo-600 hover:text-white">Add Service</Link>
                                <Link to='/myreviews' className="btn btn-ghost normal-case text-xl hover:bg-indigo-600 hover:text-white">My Reviews</Link>
                            </>
                            :
                            <>
                                <Link to='/home' className="btn btn-ghost normal-case text-xl hover:bg-indigo-600 hover:text-white">Home</Link>
                                <Link to='/blog' className="btn btn-ghost normal-case text-xl hover:bg-indigo-600 hover:text-white">Blog</Link>
                                {/* <Link to='/services' className="btn btn-ghost normal-case text-xl hover:bg-indigo-600 hover:text-white">Services</Link> */}
                            </>
                    }


                </div>
            </div>
            <div className="navbar-end hidden md:inline">
                {
                    user?.uid ?
                        <>
                            <div className='flex justify-evenly  '>
                                <button onClick={handleLogOut} className="btn btn-ghost hover:bg-indigo-600 text-xl hover:text-white">
                                    <Link  >Logout</Link>
                                </button>
                                <button className="btn btn-ghost content-center btn-circle">
                                    <div className="avatar online">
                                        <div className="w-24 rounded-full">
                                            <img src={user.photoURL} title={user.displayName} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </div>

                        </>
                        :
                        <>
                            <button className="btn btn-ghost font-bold hover:bg-indigo-600 hover:text-white">
                                <Link to='/login'>Login</Link>
                            </button>
                            <button className="btn btn-ghost font-bold hover:bg-indigo-600 hover:text-white">
                                <Link to='/register'>Register</Link>
                            </button>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;