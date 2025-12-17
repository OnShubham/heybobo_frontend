import React from 'react';
import './ActionItem.css';

const ActionItem = ({ label, onClick, variant = 'default' }) => {
    return (
        <div
            className={`action-item ${variant}`}
            onClick={onClick}
        >
            <span className="action-label">{label}</span>
            <span className="action-arrow">›</span>
        </div>
    );
};

export default ActionItem;
