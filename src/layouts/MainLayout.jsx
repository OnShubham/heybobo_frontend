import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import WeeklyRewardsPopup from '../components/WeeklyRewardsPopup';
import { assetPaths, actionHandlers } from '../data/sampleData';

/**
 * MainLayout - Wrapper component for pages that need the app header
 * Uses React Router's Outlet to render child routes
 */
const MainLayout = () => {
    const [isWeeklyRewardsOpen, setIsWeeklyRewardsOpen] = useState(false);

    const handleSOSClick = () => {
        setIsWeeklyRewardsOpen(true);
    };

    return (
        <div className="app-container">
            <AppHeader
                logo={assetPaths.logo}
                onSearch={actionHandlers.onSearch}
                notificationsCount={3}
                onSOSClick={handleSOSClick}
                onNotificationClick={actionHandlers.onNotificationClick}
                onProfileClick={actionHandlers.onProfileClick}
            />
            <Outlet />

            {/* Weekly Rewards Popup */}
            <WeeklyRewardsPopup
                isOpen={isWeeklyRewardsOpen}
                onClose={() => setIsWeeklyRewardsOpen(false)}
            />
        </div>
    );
};

export default MainLayout;

