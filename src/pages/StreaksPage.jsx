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


        </div>
    );
};

export default StreaksPage;
