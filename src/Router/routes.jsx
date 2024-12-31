import React from 'react';
import App from '../App';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ShopPage from '../Pages/ShopPage/ShopPage';

const routes = [
    {
        path: '/',
        element : <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/shop',
        element: <ShopPage />,
        errorElement: <ErrorPage />,
    }
];

export default routes;