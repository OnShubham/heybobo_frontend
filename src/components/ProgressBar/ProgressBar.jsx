import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, total, label, className = '' }) => {
    const percentage = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;

    return (
        <div className={`progress-container ${className}`}>
            <div className="progress-bar-wrapper">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {label && <p className="progress-text">{label}</p>}
        </div>
    );
};

export default ProgressBar;
