import Main from "../layout/Main";
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Services from "../pages/Services/Services";


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
            }
        ]

    }
])