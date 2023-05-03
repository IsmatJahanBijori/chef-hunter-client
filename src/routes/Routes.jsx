// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginLayout from '../components/Layout/LoginLayout'
import Login from '../components/Home/Login/Login/Login'
import Register from '../components/Home/Login/Register/Register'
import Main from '../components/Layout/Main';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Blog from '../components/Home/Blog/Blog';
import ChefsRecipe from '../components/Home/ChefsRecipe/ChefsRecipe';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chefRecipe',
                element: <ChefsRecipe />
            }
        ],
    },
    
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
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

{/**
{
        path: '/chefsCardData',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <ChefsCard></ChefsCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefsCardData/${params.id}`)

            },
        ],
    },
    {
        path: '/chefsInfo',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <ChefsRecipe></ChefsRecipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefsInfo/${params.id}`)

            },
        ],
    }, */}