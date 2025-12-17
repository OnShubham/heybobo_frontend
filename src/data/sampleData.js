/**
 * Sample Data for Account/Profile Dashboard
 * 
 * Replace this data with your actual data from API or state management
 * 
 * DYNAMIC LEVEL SYSTEM:
 * - Streak days automatically increase based on user level (level * 2.5)
 * - XP automatically calculates based on level progression
 * - Badge automatically updates at level milestones (10, 20, 30, 40, 50+)
 * 
 * To change the user level, modify the number in: createUserData(5)
 * Or use: import { createUserData } from './sampleData'; createUserData(10);
 */

// Helper functions for dynamic calculations
const calculateStreakDays = (level) => {
    // Streak increases with level (industry standard progression)
    return Math.floor(level * 2.5); // Level 5 = 12 days, Level 10 = 25 days, etc.
};

const calculateCurrentXP = (level) => {
    // XP increases exponentially with level
    return Math.floor(level * 200 + (level - 1) * 50); // Level 5 = 1200 XP
};

const getBadgeLevel = (level) => {
    // Badge progression based on level milestones
    if (level >= 50) return { name: 'Legend', badge: 'Badge_50.png' };
    if (level >= 40) return { name: 'Master', badge: 'Badge_40.png' };
    if (level >= 30) return { name: 'Expert', badge: 'Badge_30.png' };
    if (level >= 20) return { name: 'Pro', badge: 'Badge_20.png' };
    if (level >= 10) return { name: 'Advanced', badge: 'Badge_10.png' };
    return { name: 'Rookie', badge: 'Badge_09.png' };
};

// Create userData object with dynamic values
const createUserData = (level = 5) => {
    const streakDays = calculateStreakDays(level);
    const currentXP = calculateCurrentXP(level);
    const badgeInfo = getBadgeLevel(level);
    const totalXP = (level + 1) * 200 + level * 50; // XP needed for next level

    return {
        // User Profile
        profile: {
            userName: 'Lorem Ipsum',
            level: level,
            currentXP: currentXP,
            totalXP: totalXP,
            profileImage: '/assets/images/profile.png',
        },

        // Stats Cards Data (dynamically calculated)
        stats: [
            {
                icon: '/assets/images/streks.png',
                value: `${streakDays} Day${streakDays !== 1 ? 's' : ''}`,
                label: 'Streak'
            },
            {
                icon: '/assets/images/xp.png',
                value: currentXP.toString(),
                label: 'XP'
            },
            {
                icon: `/assets/badge/${badgeInfo.badge}`,
                value: badgeInfo.name,
                label: ''
            }
        ],

        // Personal Information
        personalInfo: [
            { label: 'Name', value: 'John Doe' },
            { label: 'DOB', value: '01/01/1990' },
            { label: 'Sex', value: 'Male' },
            { label: 'Email', value: 'john.doe@example.com' },
            { label: 'Phone', value: '+1 234 567 8900' },
            { label: 'Address', value: '123 Main St, City, Country' },
        ],

        // Features List
        features: [
            'Health',
            'Education',
            'Grooming',
            'Dietary',
            'Fitness'
        ],

        // Privacy & Legal Items
        privacyItems: [
            'Terms of Service',
            'Privacy Policy',
            'Cookie Policy',
            'Data Protection',
            'GDPR Compliance'
        ],

        // Account Actions
        accountActions: [
            { label: 'Change Password', variant: 'default' },
            { label: 'Update Email', variant: 'default' },
            { label: 'Log Out', variant: 'danger' },
            { label: 'Delete Account', variant: 'danger' }
        ],

        // Other Actions
        otherActions: [
            { label: 'Rate Withings', variant: 'primary' },
            { label: 'Share the App', variant: 'primary' },
            { label: 'Help & Support', variant: 'default' },
            { label: 'FAQ', variant: 'default' },
            { label: 'About', variant: 'default' }
        ],

        // Settings
        settings: {
            pushNotifications: true,
            emailNotifications: false,
            smsNotifications: false,
        }
    };
};

// Asset Paths
export const assetPaths = {
    logo: '/assets/images/logo.png',
    // topBackground: '/assets/images/top-background.png',
    profileImage: '/assets/images/profile.png',
};

// Action Handlers (to be implemented)
export const actionHandlers = {
    onSearch: (query) => {
        console.log('Search query:', query);
        // Implement search functionality
    },

    onSOSClick: () => {
        console.log('SOS button clicked');
        // Implement SOS functionality
    },

    onNotificationClick: () => {
        console.log('Notifications clicked');
        // Navigate to notifications page
    },

    onProfileClick: () => {
        console.log('Profile clicked');
        // Navigate to profile settings
    },

    onFeatureClick: (feature) => {
        console.log(`Feature clicked: ${feature}`);
        // Navigate to feature page
    },

    onPrivacyItemClick: (item) => {
        console.log(`Privacy item clicked: ${item}`);
        // Navigate to privacy/legal page
    },

    onAccountActionClick: (action) => {
        console.log(`Account action clicked: ${action}`);
        // Handle account actions (logout, delete, etc.)
    },

    onOtherActionClick: (action) => {
        console.log(`Other action clicked: ${action}`);
        // Handle other actions
    },

    onToggleNotification: (isEnabled) => {
        console.log(`Notifications toggled: ${isEnabled}`);
        // Update notification settings
    }
};

// XP Tasks Data - Industry-level dynamic task system
export const xpTasks = [
    {
        id: 1,
        title: 'Complete your daily workout',
        xpReward: 10,
        icon: '💪',
        category: 'fitness',
        completed: false
    },
    {
        id: 2,
        title: 'Log your meals for the day',
        xpReward: 10,
        icon: '🍽️',
        category: 'dietary',
        completed: false
    },
    {
        id: 3,
        title: 'Drink 8 glasses of water',
        xpReward: 10,
        icon: '💧',
        category: 'health',
        completed: false
    },
    {
        id: 4,
        title: 'Complete a meditation session',
        xpReward: 10,
        icon: '🧘',
        category: 'health',
        completed: false
    },
    {
        id: 5,
        title: 'Read for 30 minutes',
        xpReward: 10,
        icon: '📚',
        category: 'education',
        completed: false
    }
];

// Function to generate dynamic tasks based on user level and category
export const generateDynamicTasks = (userLevel = 1, categories = ['all']) => {
    const taskTemplates = {
        fitness: [
            { title: 'Complete your daily workout', xpReward: 10, icon: '💪' },
            { title: 'Do 50 push-ups', xpReward: 15, icon: '🏋️' },
            { title: 'Run 5 kilometers', xpReward: 20, icon: '🏃' },
            { title: 'Complete a yoga session', xpReward: 15, icon: '🧘' },
            { title: 'Attend a fitness class', xpReward: 25, icon: '🎯' }
        ],
        dietary: [
            { title: 'Log your meals for the day', xpReward: 10, icon: '🍽️' },
            { title: 'Eat 5 servings of vegetables', xpReward: 15, icon: '🥗' },
            { title: 'Avoid processed foods', xpReward: 20, icon: '🚫' },
            { title: 'Track your calorie intake', xpReward: 10, icon: '📊' },
            { title: 'Prepare a healthy meal', xpReward: 15, icon: '👨‍🍳' }
        ],
        health: [
            { title: 'Drink 8 glasses of water', xpReward: 10, icon: '💧' },
            { title: 'Get 8 hours of sleep', xpReward: 15, icon: '😴' },
            { title: 'Take your vitamins', xpReward: 10, icon: '💊' },
            { title: 'Complete a health check-up', xpReward: 30, icon: '🏥' },
            { title: 'Practice deep breathing', xpReward: 10, icon: '🌬️' }
        ],
        education: [
            { title: 'Read for 30 minutes', xpReward: 10, icon: '📚' },
            { title: 'Complete an online course module', xpReward: 25, icon: '🎓' },
            { title: 'Watch an educational video', xpReward: 10, icon: '📺' },
            { title: 'Practice a new skill', xpReward: 20, icon: '🎨' },
            { title: 'Write in your journal', xpReward: 10, icon: '📝' }
        ],
        grooming: [
            { title: 'Complete your skincare routine', xpReward: 10, icon: '🧴' },
            { title: 'Get a haircut', xpReward: 15, icon: '💇' },
            { title: 'Trim your nails', xpReward: 5, icon: '💅' },
            { title: 'Take a relaxing bath', xpReward: 10, icon: '🛁' },
            { title: 'Apply sunscreen', xpReward: 10, icon: '☀️' }
        ]
    };

    let selectedTasks = [];
    const taskCount = Math.min(5 + Math.floor(userLevel / 5), 10); // More tasks as level increases

    // Filter categories
    const activeCategories = categories.includes('all')
        ? Object.keys(taskTemplates)
        : categories.filter(cat => taskTemplates[cat]);

    // Generate tasks from selected categories
    activeCategories.forEach(category => {
        const categoryTasks = taskTemplates[category];
        const tasksToAdd = Math.ceil(taskCount / activeCategories.length);

        for (let i = 0; i < Math.min(tasksToAdd, categoryTasks.length); i++) {
            const task = categoryTasks[i];
            selectedTasks.push({
                id: selectedTasks.length + 1,
                ...task,
                category,
                completed: false,
                // Scale XP reward based on user level
                xpReward: Math.floor(task.xpReward * (1 + userLevel * 0.1))
            });
        }
    });

    return selectedTasks.slice(0, taskCount);
};

// XP Task Categories for filtering
export const xpTaskCategories = [
    { id: 'all', name: 'All Tasks', icon: '📋' },
    { id: 'fitness', name: 'Fitness', icon: '💪' },
    { id: 'dietary', name: 'Dietary', icon: '🍽️' },
    { id: 'health', name: 'Health', icon: '💧' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'grooming', name: 'Grooming', icon: '🧴' }
];

// Export userData with default level 5
export const userData = createUserData(5);

// Export the function to create userData with custom level
export { createUserData };

export default userData;
