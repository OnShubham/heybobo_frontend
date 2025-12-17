import React, { useState, useEffect } from 'react';
import './XPPopup.css';

const XPPopup = ({ isOpen, onClose, userId }) => {
    const [questData, setQuestData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        if (isOpen && userId) {
            fetchQuestData();
        }
    }, [isOpen, userId]);

    const fetchQuestData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://127.0.0.1:8000/quests/${userId}/status`);
            if (!response.ok) {
                throw new Error('Failed to fetch quest data');
            }
            const data = await response.json();
            setQuestData(data);
            // Initialize completed tasks based on progress
            const completed = new Array(data.quest_details.tasks.length).fill(false);
            for (let i = 0; i < data.progress.completed; i++) {
                completed[i] = true;
            }
            setCompletedTasks(completed);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleTaskComplete = (taskIndex) => {
        const newCompletedTasks = [...completedTasks];
        newCompletedTasks[taskIndex] = !newCompletedTasks[taskIndex];
        setCompletedTasks(newCompletedTasks);
    };

    if (!isOpen) return null;

    if (loading) {
        return (
            <div className="popup-overlay" onClick={onClose}>
                <div className="popup-content xp-task-popup" onClick={(e) => e.stopPropagation()}>
                    <button className="popup-close" onClick={onClose}>×</button>
                    <div className="popup-loading">
                        <div className="loading-spinner"></div>
                        <p>Loading tasks...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="popup-overlay" onClick={onClose}>
                <div className="popup-content xp-task-popup" onClick={(e) => e.stopPropagation()}>
                    <button className="popup-close" onClick={onClose}>×</button>
                    <div className="popup-error">
                        <p>Error: {error}</p>
                        <button onClick={fetchQuestData} className="retry-button">Retry</button>
                    </div>
                </div>
            </div>
        );
    }

    if (!questData) return null;

    const { quest_details } = questData;
    const tasks = quest_details.tasks;
    const completedCount = completedTasks.filter(Boolean).length;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content xp-task-popup" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>×</button>

                <div className="popup-header">
                    <h2 className="popup-title">Earn XP</h2>
                    <p className="popup-subtitle">
                        Complete atleast one task to earn your streak
                    </p>
                </div>

                <div className="task-list">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className={`task-item ${completedTasks[index] ? 'completed' : ''}`}
                            onClick={() => handleTaskComplete(index)}
                        >
                            <div className="task-content">
                                <span className="task-title">{task.name}</span>
                            </div>
                            <div className="task-reward">
                                <div className="xp-badge">
                                    <img
                                        src="/assets/images/xp.png"
                                        alt="XP"
                                        className="xp-icon-img"
                                    />
                                    <span className="xp-amount">x10</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="popup-footer">
                    <div className="progress-info">
                        <span className="progress-text">
                            {completedCount} of {tasks.length} tasks completed
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default XPPopup;

