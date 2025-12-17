import React from 'react';
import './StatsCards.css';
import ProgressBar from '../ProgressBar/ProgressBar';


const StatsCards = ({ stats, currentXP, totalXP }) => {
    return (<>  <div className="xp-container">
        <ProgressBar
            current={currentXP}
            total={totalXP}
            label={`${currentXP} / ${totalXP} XP`}
        />
    </div>
        <div className="stats-cards-container">

            {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    </>);
};

export default StatsCards;
