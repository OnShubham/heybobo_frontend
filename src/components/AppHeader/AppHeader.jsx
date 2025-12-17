import React from 'react';
import './AppHeader.css';

const AppHeader = ({
    logo,
    onSearch,
    notificationsCount = 0,
    onSOSClick,
    onNotificationClick,
    onProfileClick
}) => {
    return (
        <header className="app-header">
            <div className="app-header-content">
                {/* Left: Logo */}
                <div className="app-header-left">
                    <img src={logo} alt="App Logo" className="app-logo" />
                </div>

                {/* Center: Search */}
                <div className="app-header-center">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Type here..."
                            className="search-input"
                            onChange={(e) => onSearch && onSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="app-header-right">
                    {/* SOS Button */}
                    <button className="sos-button" onClick={onSOSClick}>
                        SOS
                    </button>

                    {/* Notification Icon */}
                    <button className="icon-button notification-button" onClick={onNotificationClick}>
                        <span className="notification-icon">🔔</span>
                        {notificationsCount > 0 && (
                            <span className="notification-badge">{notificationsCount}</span>
                        )}
                    </button>

                    {/* User Avatar */}
                    <button className="icon-button avatar-button" onClick={onProfileClick}>
                        <span className="avatar-icon">👤</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
