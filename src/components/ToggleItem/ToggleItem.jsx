import React from 'react';
import './ToggleItem.css';

const ToggleItem = ({ label, isEnabled, onToggle }) => {
    return (
        <div className="toggle-item">
            <span className="toggle-label">{label}</span>
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={(e) => onToggle && onToggle(e.target.checked)}
                />
                <span className="toggle-slider"></span>
            </label>
        </div>
    );
};

export default ToggleItem;
