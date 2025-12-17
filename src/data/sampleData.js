/**
 * Sample Data for Account/Profile Dashboard
 * 
 * Replace this data with your actual data from API or state management
 */

export const userData = {
    // User Profile
    profile: {
        userName: 'John Doe',
        level: 5,
        currentXP: 1680,
        totalXP: 2000,
        profileImage: '/assets/images/profile.png',
    },

    // Stats Cards Data
    stats: [
        { icon: '🔥', value: '1 Day', label: 'Streak' },
        { icon: '💎', value: '270', label: 'XP' },
        { icon: '🏅', value: 'Rookie', label: '' }
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

// Asset Paths
export const assetPaths = {
    logo: '/assets/images/logo.png',
    topBackground: '/assets/images/top-background.png',
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

export default userData;
