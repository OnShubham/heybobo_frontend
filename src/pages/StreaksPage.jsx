import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StreaksPage.css';

/**
 * StreaksPage - Displays user streak information and activity calendar
 * Uses React Router for navigation
 */
const StreaksPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <button className="back-button" onClick={handleBack}>
                    ← Back
                </button>
                <h1>Streaks</h1>
            </div>

            <div className="page-content">
                <div className="streak-hero">
                    <div className="streak-icon">🔥</div>
                    <h2 className="streak-count">1 Day Streak</h2>
                    <p className="streak-subtitle">Keep it going!</p>
                </div>

                <div className="streak-stats">
                    <div className="streak-stat-card">
                        <div className="stat-number">1</div>
                        <div className="stat-text">Current Streak</div>
                    </div>
                    <div className="streak-stat-card">
                        <div className="stat-number">7</div>
                        <div className="stat-text">Longest Streak</div>
                    </div>
                    <div className="streak-stat-card">
                        <div className="stat-number">30</div>
                        <div className="stat-text">Total Days</div>
                    </div>
                </div>

                <div className="streak-calendar">
                    <h3>Activity Calendar</h3>
                    <div className="calendar-grid">
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={i}
                                className={`calendar-day ${i < 10 ? 'active' : ''}`}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="streak-tips">
                    <h3>💡 Streak Tips</h3>
                    <ul>
                        <li>Complete at least one activity daily to maintain your streak</li>
                        <li>Set reminders to help you stay consistent</li>
                        <li>Longer streaks unlock special rewards!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StreaksPage;
