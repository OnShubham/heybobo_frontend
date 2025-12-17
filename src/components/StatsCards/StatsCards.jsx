import React from 'react';
import './StatsCards.css';

const StatsCards = ({ stats }) => {
    return (
        <div className="stats-cards-container">
            {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
