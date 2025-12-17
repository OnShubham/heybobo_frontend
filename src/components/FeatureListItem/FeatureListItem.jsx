import React from 'react';
import './FeatureListItem.css';

const FeatureListItem = ({ label, onClick }) => {
    return (
        <div className="feature-list-item" onClick={onClick}>
            <span className="feature-label">{label}</span>
        </div>
    );
};

export default FeatureListItem;
