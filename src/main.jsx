import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import LandingPage from './pages/LandingPage';
import AppHeader from './components/layout/AppHeader';
import App from './pages/App';
import Wrapper from './components/layout/Wrapper';

const router = createBrowserRouter([
    {
        element: <Header />,
        children: [
            {
                element: <Wrapper />,
                children: [
                    {
                        path: '/',
                        index: true,
                        element: <LandingPage />,
                    },
                ],
            },
        ],
    },
    {
        element: <AppHeader />,
        children: [
            {
                path: '/app',
                element: <App />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
