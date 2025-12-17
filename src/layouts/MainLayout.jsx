import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import { assetPaths, actionHandlers } from '../data/sampleData';

/**
 * MainLayout - Wrapper component for pages that need the app header
 * Uses React Router's Outlet to render child routes
 */
const MainLayout = () => {
    return (
        <div className="app-container">
            <AppHeader
                logo={assetPaths.logo}
                onSearch={actionHandlers.onSearch}
                notificationsCount={3}
                onSOSClick={actionHandlers.onSOSClick}
                onNotificationClick={actionHandlers.onNotificationClick}
                onProfileClick={actionHandlers.onProfileClick}
            />
            <Outlet />
        </div>
    );
};

export default MainLayout;
