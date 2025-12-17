import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout';

// Pages
import Dashboard from '../pages/Dashboard';
import StreaksPage from '../pages/StreaksPage';
import LeaderboardPage from '../pages/LeaderboardPage';

/**
 * Application Routes Configuration
 * Using React Router v6 createBrowserRouter for optimal performance
 */
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
        ],
    },
    {
        path: '/streaks',
        element: <StreaksPage />,
    },
    {
        path: '/leaderboard',
        element: <LeaderboardPage />,
    },
    {
        // Catch-all route - redirect to home
        path: '*',
        element: <Navigate to="/" replace />,
    },
]);

/**
 * AppRouter Component
 * Provides routing context to the entire application
 */
const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
