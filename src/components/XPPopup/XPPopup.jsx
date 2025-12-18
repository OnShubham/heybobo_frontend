import React from 'react';
import './XPPopup.css';

// Static task data organized by groups
const TASK_GROUPS = [
    {
        name: 'Nutrition',
        tasks: [
            { name: 'Add Food Log', frequency: 'Daily', points: 10 },
            { name: 'Extract Nutrients', frequency: 'Daily', points: 20 },
            { name: 'Meal Plan', frequency: 'Weekly', points: 30 },
            { name: 'Grocery List Generator', frequency: 'Weekly', points: 30 },
            { name: 'Scan Barcode to Get Nutrients', frequency: 'Daily', points: 10 },
            { name: 'Barcode Scanner', frequency: 'Daily', points: 10 },
            { name: 'Food Scanner', frequency: 'Daily', points: 10 },
            { name: 'Scan Grocery', frequency: 'Daily', points: 10 },
            { name: 'Extract Text Grocery', frequency: 'Daily', points: 10 },
            { name: 'Scan Grocery (Extract)', frequency: 'Daily', points: 10 },
        ]
    },
    {
        name: 'Education',
        tasks: [
            { name: 'Student Enroll in a Course', frequency: 'Weekly', points: 30 },
            { name: 'Update Lesson Progress', frequency: 'Daily', points: 10 },
            { name: 'Make a Learning Plan', frequency: 'Weekly', points: 30 },
            { name: 'Make a Plan With AI', frequency: 'Weekly', points: 30 },
            { name: 'Answer Question', frequency: 'Daily', points: 10 },
            { name: 'Generate a Quiz', frequency: 'Weekly', points: 30 },
            { name: 'Start Practice Session', frequency: 'Daily', points: 10 },
        ]
    },
    {
        name: 'Fitness',
        tasks: [
            { name: 'Generate Workout Plan', frequency: 'Weekly', points: 20 },
            { name: 'Get Pose Analysis Video', frequency: 'Daily', points: 10 },
            { name: 'Generate Workout Plan (Athlete)', frequency: 'Weekly', points: 30 },
            { name: 'Analyse Face', frequency: 'Daily', points: 10 },
        ]
    },
    {
        name: 'Mental Wellness',
        tasks: [
            { name: 'Habit Log', frequency: 'Daily', points: 10 },
            { name: 'Hydration Log', frequency: 'Daily', points: 10 },
            { name: 'Sleep Log', frequency: 'Daily', points: 10 },
            { name: 'Stress Log', frequency: 'Daily', points: 10 },
            { name: 'Guidance', frequency: 'Daily', points: 10 },
            { name: 'Counseling Support', frequency: 'Weekly', points: 30 },
            { name: 'Create a Grooming Profile', frequency: 'Weekly', points: 30 },
            { name: 'Visual Progress Analysis', frequency: 'Daily', points: 10 },
        ]
    },
    {
        name: 'Goal Tracking',
        tasks: [
            { name: 'Add Goal', frequency: 'Daily', points: 10 },
            { name: 'Log Adherence', frequency: 'Daily', points: 10 },
            { name: 'Generate Daily Actions Plan', frequency: 'Daily', points: 10 },
            { name: 'LLM Propose Habits for Custom Goal', frequency: 'Weekly', points: 30 },
        ]
    },
    {
        name: 'Fashion & Style',
        tasks: [
            { name: 'Analyze Outfit Image / Capture', frequency: 'Daily', points: 10 },
            { name: 'Check Pose Criteria', frequency: 'Daily', points: 10 },
            { name: 'Analyze Body Shape', frequency: 'Daily', points: 10 },
            { name: 'Get Color Recommendations', frequency: 'Daily', points: 10 },
            { name: 'Get Style Recommendations', frequency: 'Daily', points: 20 },
            { name: 'Get Complete Outfit Suggestions', frequency: 'Daily', points: 20 },
            { name: 'Generate AI-powered Outfit Recommendations', frequency: 'Daily', points: 20 },
            { name: 'Search Products', frequency: 'Daily', points: 10 },
            { name: 'Get Personalized Style Advice (LLM)', frequency: 'Weekly', points: 30 },
            { name: 'Ask a Style Question (LLM)', frequency: 'Daily', points: 10 },
        ]
    },
    {
        name: 'Hair Care',
        tasks: [
            { name: 'Analyze a Hair Image', frequency: 'Weekly', points: 10 },
            { name: 'Recommend Hair Products', frequency: 'Weekly', points: 10 },
            { name: 'Recommend Hair Remedies', frequency: 'Weekly', points: 10 },
        ]
    },
    {
        name: 'Skin Care',
        tasks: [
            { name: 'Analyze a Skin Image', frequency: 'Daily', points: 10 },
        ]
    },
    {
        name: 'Supplements',
        tasks: [
            { name: 'Create Supplement Log', frequency: 'Daily', points: 10 },
            { name: 'Create Supplement', frequency: 'Weekly', points: 30 },
            { name: 'Update Supplement', frequency: 'Daily', points: 10 },
        ]
    },
    {
        name: 'Recipes',
        tasks: [
            { name: 'Suggest a Recipe', frequency: 'Daily', points: 10 },
            { name: 'Meal Prep Guide', frequency: 'Weekly', points: 30 },
            { name: 'Meal Substitution', frequency: 'Daily', points: 10 },
            { name: 'Calculate Macros', frequency: 'Daily', points: 10 },
            { name: 'Lookup Food', frequency: 'Daily', points: 10 },
        ]
    }
];

const XPPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

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
                    {TASK_GROUPS.map((group, groupIndex) => (
                        <div key={groupIndex} className="task-group">
                            <h3 className="group-title">{group.name}</h3>
                            {group.tasks.map((task, taskIndex) => (
                                <div
                                    key={taskIndex}
                                    className="task-item"
                                >
                                    <div className="task-content">
                                        <span className="task-title">{task.name}</span>
                                        <span className="task-frequency">{task.frequency}</span>
                                    </div>
                                    <div className="task-reward">
                                        <div className="xp-badge">
                                            <img
                                                src="/assets/images/xp.png"
                                                alt="XP"
                                                className="xp-icon-img"
                                            />
                                            <span className="xp-amount">x{task.points}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default XPPopup;
