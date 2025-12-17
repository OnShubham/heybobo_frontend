/**
 * XP Task System - Usage Examples
 * 
 * This file demonstrates various ways to use the XP Task System
 */

import { xpTasks, generateDynamicTasks, xpTaskCategories } from '../data/sampleData';

// ============================================
// Example 1: Using Static Tasks
// ============================================
export const useStaticTasks = () => {
    // Simply import and use the predefined tasks
    console.log('Static Tasks:', xpTasks);

    // These tasks are fixed and don't change based on user level
    return xpTasks;
};

// ============================================
// Example 2: Generate Tasks for Beginner User
// ============================================
export const getBeginnerTasks = () => {
    // Level 1-5 users get 5-6 basic tasks
    const userLevel = 3;
    const tasks = generateDynamicTasks(userLevel, ['all']);

    console.log(`Tasks for Level ${userLevel}:`, tasks);
    return tasks;
};

// ============================================
// Example 3: Generate Tasks for Advanced User
// ============================================
export const getAdvancedTasks = () => {
    // Level 20+ users get more tasks with higher XP rewards
    const userLevel = 25;
    const tasks = generateDynamicTasks(userLevel, ['all']);

    console.log(`Tasks for Level ${userLevel}:`, tasks);
    // At level 25, XP rewards are 2.5x the base amount
    return tasks;
};

// ============================================
// Example 4: Category-Specific Tasks
// ============================================
export const getFitnessTasks = () => {
    // Get only fitness-related tasks
    const userLevel = 10;
    const tasks = generateDynamicTasks(userLevel, ['fitness']);

    console.log('Fitness Tasks:', tasks);
    return tasks;
};

export const getHealthAndDietaryTasks = () => {
    // Get tasks from multiple specific categories
    const userLevel = 10;
    const tasks = generateDynamicTasks(userLevel, ['health', 'dietary']);

    console.log('Health & Dietary Tasks:', tasks);
    return tasks;
};

// ============================================
// Example 5: Task Completion Tracking
// ============================================
export const trackTaskCompletion = (tasks) => {
    // Calculate completion statistics
    const completedTasks = tasks.filter(task => task.completed);
    const totalTasks = tasks.length;
    const completionRate = (completedTasks.length / totalTasks) * 100;

    const earnedXP = completedTasks.reduce((sum, task) => sum + task.xpReward, 0);
    const totalXP = tasks.reduce((sum, task) => sum + task.xpReward, 0);

    return {
        completedTasks: completedTasks.length,
        totalTasks,
        completionRate: completionRate.toFixed(1),
        earnedXP,
        totalXP,
        remainingXP: totalXP - earnedXP
    };
};

// ============================================
// Example 6: Daily Task Reset
// ============================================
export const resetDailyTasks = (tasks) => {
    // Reset all tasks to incomplete at the start of a new day
    return tasks.map(task => ({
        ...task,
        completed: false
    }));
};

// ============================================
// Example 7: Custom Task Creation
// ============================================
export const createCustomTask = (title, xpReward, icon, category) => {
    return {
        id: Date.now(), // Simple ID generation
        title,
        xpReward,
        icon,
        category,
        completed: false
    };
};

// Usage example:
export const addCustomTaskExample = () => {
    const customTask = createCustomTask(
        'Complete a 30-minute meditation',
        25,
        '🧘‍♂️',
        'health'
    );

    console.log('Custom Task:', customTask);
    return customTask;
};

// ============================================
// Example 8: Task Filtering
// ============================================
export const filterTasksByCategory = (tasks, categoryId) => {
    if (categoryId === 'all') return tasks;
    return tasks.filter(task => task.category === categoryId);
};

export const filterCompletedTasks = (tasks) => {
    return tasks.filter(task => task.completed);
};

export const filterIncompleteTasks = (tasks) => {
    return tasks.filter(task => !task.completed);
};

// ============================================
// Example 9: Task Sorting
// ============================================
export const sortTasksByXP = (tasks, ascending = false) => {
    return [...tasks].sort((a, b) =>
        ascending ? a.xpReward - b.xpReward : b.xpReward - a.xpReward
    );
};

export const sortTasksByCompletion = (tasks) => {
    // Show incomplete tasks first
    return [...tasks].sort((a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
    );
};

// ============================================
// Example 10: Integration with React Component
// ============================================
export const TaskSystemExample = () => {
    // This is a React component example
    const [tasks, setTasks] = React.useState([]);
    const [userLevel, setUserLevel] = React.useState(5);
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    React.useEffect(() => {
        // Generate tasks when level or category changes
        const newTasks = generateDynamicTasks(userLevel, [selectedCategory]);
        setTasks(newTasks);
    }, [userLevel, selectedCategory]);

    const handleTaskComplete = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const stats = trackTaskCompletion(tasks);

    return {
        tasks,
        stats,
        handleTaskComplete,
        categories: xpTaskCategories
    };
};

// ============================================
// Example 11: Streak Integration
// ============================================
export const checkStreakEligibility = (tasks) => {
    // User maintains streak if at least one task is completed
    const hasCompletedTask = tasks.some(task => task.completed);
    return hasCompletedTask;
};

// ============================================
// Example 12: Bonus XP Calculation
// ============================================
export const calculateBonusXP = (tasks) => {
    const completedTasks = tasks.filter(task => task.completed);
    const totalTasks = tasks.length;

    // Award bonus XP for completing all tasks
    if (completedTasks.length === totalTasks) {
        const baseXP = tasks.reduce((sum, task) => sum + task.xpReward, 0);
        const bonusXP = Math.floor(baseXP * 0.5); // 50% bonus
        return {
            baseXP,
            bonusXP,
            totalXP: baseXP + bonusXP,
            allTasksCompleted: true
        };
    }

    return {
        baseXP: completedTasks.reduce((sum, task) => sum + task.xpReward, 0),
        bonusXP: 0,
        totalXP: completedTasks.reduce((sum, task) => sum + task.xpReward, 0),
        allTasksCompleted: false
    };
};

// ============================================
// Example 13: Task Analytics
// ============================================
export const getTaskAnalytics = (tasks, historicalData = []) => {
    const currentStats = trackTaskCompletion(tasks);

    return {
        current: currentStats,
        averageCompletionRate: historicalData.length > 0
            ? historicalData.reduce((sum, day) => sum + day.completionRate, 0) / historicalData.length
            : 0,
        totalXPEarned: historicalData.reduce((sum, day) => sum + day.earnedXP, 0),
        streak: checkStreakEligibility(tasks),
        favoriteCategory: getMostCompletedCategory(tasks)
    };
};

const getMostCompletedCategory = (tasks) => {
    const categoryCount = {};
    tasks.filter(task => task.completed).forEach(task => {
        categoryCount[task.category] = (categoryCount[task.category] || 0) + 1;
    });

    return Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'none';
};

// ============================================
// Export all examples
// ============================================
export default {
    useStaticTasks,
    getBeginnerTasks,
    getAdvancedTasks,
    getFitnessTasks,
    getHealthAndDietaryTasks,
    trackTaskCompletion,
    resetDailyTasks,
    createCustomTask,
    filterTasksByCategory,
    sortTasksByXP,
    checkStreakEligibility,
    calculateBonusXP,
    getTaskAnalytics
};
