import React from 'react';
import './WeeklyRewardsPopup.css';

const WeeklyRewardsPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const days = [
        { day: 1, reward: 'Gold x50', icon: '/assets/images/xp.png', claimed: true },
        { day: 2, reward: '30 XP', icon: '/assets/images/xp.png', claimed: false },
        { day: 3, reward: '30 XP', icon: '/assets/images/xp.png', claimed: false },
        { day: 4, reward: 'Gold x50', icon: '/assets/images/xp.png', claimed: false },
        { day: 5, reward: 'Gold x50', icon: '/assets/images/xp.png', claimed: false },
        { day: 6, reward: 'Gold x50', icon: '/assets/images/xp.png', claimed: false },
    ];

    return (
        <div className="rewards-popup-overlay" onClick={onClose}>
            <div className="rewards-popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="rewards-popup-close" onClick={onClose}>×</button>

                {/* Header with logo */}
                <div className="rewards-header">
                    <img
                        src="/assets/images/weekly_rewards.png"
                        alt="Weekly Rewards"
                        className="rewards-logo"
                    />
                </div>

                {/* Days Container */}
                <div className="rewards-days-container">
                    {/* All 7 days in ONE row */}
                    <div className="rewards-days-row">
                        {days.map((dayData, index) => (
                            <div key={index} className="reward-day-card">
                                <div className="day-label">Day {dayData.day}</div>
                                <img
                                    src={dayData.icon}
                                    alt={dayData.reward}
                                    className="reward-icon"
                                />
                                <div className="reward-text">{dayData.reward}</div>
                                {dayData.claimed && (
                                    <div className="claimed-check">✓</div>
                                )}
                            </div>
                        ))}

                        {/* Day 7d */}
                        <div className="reward-day-card reward-day-7">
                            <div className="day-label">Day 7d</div>
                            <img
                                src="/assets/images/gift.png"
                                alt="Mystery Gift"
                                className="reward-icon"
                            />
                            <div className="reward-text">Mystery Gift</div>
                        </div>
                    </div>

                    {/* Claim Button */}
                    <button className="claim-button">Claim</button>
                </div>
            </div>
        </div>
    );
};

export default WeeklyRewardsPopup;
