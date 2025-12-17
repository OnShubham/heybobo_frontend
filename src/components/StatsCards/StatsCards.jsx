import React from 'react';
import './StatsCards.css';
import ProgressBar from '../ProgressBar/ProgressBar';


const StatsCards = ({ stats, currentXP, totalXP, onStreakClick, onXPClick, onRookieClick }) => {
    const handleCardClick = (stat, index) => {
        // Determine which card was clicked based on label or index
        if (stat.label === 'Streak' || stat.icon.includes('streks.png')) {
            onStreakClick && onStreakClick();
        } else if (stat.label === 'XP' || stat.icon.includes('xp.png')) {
            onXPClick && onXPClick();
        } else if (stat.label === '' && stat.icon.includes('Badge_')) {
            // Badge card (any badge level)
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
                    <div className="stat-icon">
                        <img src={stat.icon} alt={stat.label || stat.value} />
                    </div>
                    <div className="stat-text">
                        {stat.value} {stat.label}
                    </div>
                </div>
            ))}
        </div>
    </>);
};

export default StatsCards;
