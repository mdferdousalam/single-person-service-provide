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
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/Services/ServiceDetails";


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/logout',
                element: <Logout></Logout>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://b6a11-service-review-server-side-seven.vercel.app/services')
            },
            {
                path: '/services/datails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-seven.vercel.app/services/${params.id}`)

            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addreview'
            }
        ]

    }
])