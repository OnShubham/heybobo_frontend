import React from 'react';
import './PersonalInfoItem.css';

const PersonalInfoItem = ({ label, value }) => {
    return (
        <div className="personal-info-item">
            <span className="info-label">{label}</span>
            <span className="info-value">{value}</span>
        </div>
    );
};

export default PersonalInfoItem;
