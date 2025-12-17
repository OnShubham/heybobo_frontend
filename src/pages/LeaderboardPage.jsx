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

    const leaderboardData = [
        { rank: 1, name: 'Alex Champion', xp: 5420, avatar: '👑', badge: 'gold' },
        { rank: 2, name: 'Sarah Winner', xp: 4890, avatar: '🥈', badge: 'silver' },
        { rank: 3, name: 'Mike Bronze', xp: 4320, avatar: '🥉', badge: 'bronze' },
        { rank: 4, name: 'Emma Star', xp: 3850, avatar: '⭐', badge: '' },
        { rank: 5, name: 'John Doe', xp: 3420, avatar: '🎯', badge: '' },
        { rank: 6, name: 'Lisa Pro', xp: 3100, avatar: '💪', badge: '' },
        { rank: 7, name: 'Tom Swift', xp: 2890, avatar: '🚀', badge: '' },
        { rank: 8, name: 'You', xp: 2700, avatar: '👤', badge: 'current' },
    ];

    return (
        <div className="leaderboard-container">
            <div className="page-header">
                <button className="back-button" onClick={handleBack}>
                    ← Back
                </button>
                <h1>Leaderboard</h1>
            </div>

            <div className="page-content">
                <div className="leaderboard-header">
                    <h2>🏆 Top Players</h2>
                    <p>Compete with others and climb the ranks!</p>
                </div>

                <div className="podium">
                    <div className="podium-item second">
                        <div className="podium-avatar">{leaderboardData[1].avatar}</div>
                        <div className="podium-name">{leaderboardData[1].name}</div>
                        <div className="podium-xp">{leaderboardData[1].xp} XP</div>
                        <div className="podium-rank">2</div>
                    </div>
                    <div className="podium-item first">
                        <div className="podium-avatar">{leaderboardData[0].avatar}</div>
                        <div className="podium-name">{leaderboardData[0].name}</div>
                        <div className="podium-xp">{leaderboardData[0].xp} XP</div>
                        <div className="podium-rank">1</div>
                    </div>
                    <div className="podium-item third">
                        <div className="podium-avatar">{leaderboardData[2].avatar}</div>
                        <div className="podium-name">{leaderboardData[2].name}</div>
                        <div className="podium-xp">{leaderboardData[2].xp} XP</div>
                        <div className="podium-rank">3</div>
                    </div>
                </div>

                <div className="leaderboard-list">
                    {leaderboardData.slice(3).map((player) => (
                        <div
                            key={player.rank}
                            className={`leaderboard-row ${player.badge === 'current' ? 'current-user' : ''}`}
                        >
                            <div className="player-rank">#{player.rank}</div>
                            <div className="player-avatar">{player.avatar}</div>
                            <div className="player-info">
                                <div className="player-name">{player.name}</div>
                                <div className="player-xp">{player.xp} XP</div>
                            </div>
                            {player.badge === 'current' && (
                                <div className="current-badge">You</div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="leaderboard-footer">
                    <p>💡 Earn more XP to climb the leaderboard!</p>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPage;
