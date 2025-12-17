import React from 'react';
import './StatsCards.css';
import ProgressBar from '../ProgressBar/ProgressBar';


const StatsCards = ({ stats, currentXP, totalXP, onStreakClick, onXPClick, onRookieClick }) => {
    const handleCardClick = (stat, index) => {
        // Determine which card was clicked based on label or index
        if (stat.label === 'Streak' || stat.icon === '🔥') {
            onStreakClick && onStreakClick();
        } else if (stat.label === 'XP' || stat.icon === '💎') {
            onXPClick && onXPClick();
        } else if (stat.label === '' && stat.value === 'Rookie') {
            // Rookie card (no label, value is "Rookie")
            onRookieClick && onRookieClick();
        }
    };

    return (<>  <div className="xp-container">
        <ProgressBar
            current={currentXP}
            total={totalXP}
        // label={`${currentXP} / ${totalXP} XP`}
        />
    </div>
        <div className="stats-cards-container">

            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="stat-card"
                    onClick={() => handleCardClick(stat, index)}
                >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    </>);
};

export default StatsCards;
