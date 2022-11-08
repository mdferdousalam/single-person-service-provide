import Main from "../layout/Main";
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Services from "../pages/Services/Services";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import MyReviews from "../pages/MyReviews/MyReviews";
import AddService from "../pages/AddService/AddService";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/logout',
                element: <Logout></Logout>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    }
])