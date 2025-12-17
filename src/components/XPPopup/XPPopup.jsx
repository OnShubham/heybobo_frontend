import React from 'react';
import './XPPopup.css';

const XPPopup = ({ isOpen, onClose, currentXP, totalXP }) => {
    if (!isOpen) return null;

    const xpPercentage = (currentXP / totalXP) * 100;
    const xpNeeded = totalXP - currentXP;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>×</button>

                <div className="popup-header">
                    <div className="popup-icon">💎</div>
                    <h2>Your XP Progress</h2>
                </div>

                <div className="xp-stats">
                    <div className="xp-stat-item">
                        <div className="xp-stat-label">Current XP</div>
                        <div className="xp-stat-value">{currentXP}</div>
                    </div>
                    <div className="xp-divider">/</div>
                    <div className="xp-stat-item">
                        <div className="xp-stat-label">Total XP</div>
                        <div className="xp-stat-value">{totalXP}</div>
                    </div>
                </div>

                <div className="xp-progress-container">
                    <div className="xp-progress-bar">
                        <div
                            className="xp-progress-fill"
                            style={{ width: `${xpPercentage}%` }}
                        >
                            <span className="xp-progress-text">{xpPercentage.toFixed(1)}%</span>
                        </div>
                    </div>
                </div>

                <div className="xp-info">
                    <p className="xp-needed">
                        <strong>{xpNeeded} XP</strong> needed to reach next level
                    </p>
                </div>

                <div className="xp-breakdown">
                    <h3>How to Earn XP</h3>
                    <div className="xp-method">
                        <span className="method-icon">✅</span>
                        <span className="method-name">Complete Daily Tasks</span>
                        <span className="method-xp">+50 XP</span>
                    </div>
                    <div className="xp-method">
                        <span className="method-icon">🔥</span>
                        <span className="method-name">Maintain Streak</span>
                        <span className="method-xp">+20 XP/day</span>
                    </div>
                    <div className="xp-method">
                        <span className="method-icon">🎯</span>
                        <span className="method-name">Complete Challenges</span>
                        <span className="method-xp">+100 XP</span>
                    </div>
                    <div className="xp-method">
                        <span className="method-icon">🏆</span>
                        <span className="method-name">Win Competitions</span>
                        <span className="method-xp">+200 XP</span>
                    </div>
                </div>

                <button className="popup-action-btn" onClick={onClose}>
                    Got it!
                </button>
            </div>
        </div>
    );
};

export default XPPopup;
