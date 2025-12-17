import React, { useState } from 'react';
import './XPPopup.css';
import { xpTasks, generateDynamicTasks } from '../../data/sampleData';

const XPPopup = ({ isOpen, onClose, currentXP, totalXP, userLevel = 5 }) => {
    // Use dynamic tasks based on user level, or fallback to static tasks
    const [tasks, setTasks] = useState(
        userLevel ? generateDynamicTasks(userLevel, ['all']) : xpTasks
    );

    if (!isOpen) return null;

    const handleTaskComplete = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const completedTasksCount = tasks.filter(task => task.completed).length;
    const totalXPEarnable = tasks.reduce((sum, task) => sum + task.xpReward, 0);
    const earnedXP = tasks
        .filter(task => task.completed)
        .reduce((sum, task) => sum + task.xpReward, 0);

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
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`task-item ${task.completed ? 'completed' : ''}`}
                            onClick={() => handleTaskComplete(task.id)}
                        >
                            <div className="task-content">
                                <span className="task-icon">{task.icon}</span>
                                <span className="task-title">{task.title}</span>
                            </div>
                            <div className="task-reward">
                                <div className="xp-badge">
                                    <svg className="xp-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                                    </svg>
                                    <span className="xp-amount">x{task.xpReward}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="popup-footer">
                    <div className="progress-info">
                        <span className="progress-text">
                            {completedTasksCount} of {tasks.length} tasks completed
                        </span>
                        <span className="xp-earned">
                            {earnedXP} / {totalXPEarnable} XP
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default XPPopup;

