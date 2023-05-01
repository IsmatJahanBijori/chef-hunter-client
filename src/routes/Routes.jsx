// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import HomeBanner from '../components/Home/HomeBanner/HomeBanner';
import LoginLayout from '../components/Layout/LoginLayout'
import Login from '../components/Home/Login/Login/Login'
import Register from '../components/Home/Login/Register/Register'
import Main from '../components/Layout/Main';
import ErrorPage from '../components/ErrorPage/ErrorPage';
const router=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
])
export default router