import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LeaderboardPage.css';

/**
 * LeaderboardPage - Displays competitive leaderboard rankings
 * Uses React Router for navigation
 */
const LeaderboardPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };



    return (
        <div className="leaderboard-container">
            <div className="page-header">
                <button className="back-button" onClick={handleBack}>
                    ← Back
                </button>
                <h1>Leaderboard</h1>
            </div>


        </div>
    );
};

export default LeaderboardPage;
