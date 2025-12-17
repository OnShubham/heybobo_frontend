import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, total, label, className = '' }) => {
    const percentage = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;

    return (
        <div className={`progress-container ${className}`}>
            <div className="progress-text">
                <span className="current-xp">{current}</span> / {total} XP
            </div>
            <div className="progress-bar-with-icon">
                <img src="/assets/images/Levels.png" alt="Level" className="level-icon" />
                <div className="progress-bar-wrapper">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
