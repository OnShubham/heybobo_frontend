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

// Export userData with default level 5
export const userData = createUserData(5);

// Export the function to create userData with custom level
export { createUserData };

export default userData;
