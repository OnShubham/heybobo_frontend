import React, { useState } from 'react';
import './App.css';

// Import Components
import AppHeader from './components/AppHeader';
import ProfileHeader from './components/ProfileHeader';
import StatsCards from './components/StatsCards';
import AccordionSection from './components/AccordionSection';
import PersonalInfoItem from './components/PersonalInfoItem';
import FeatureListItem from './components/FeatureListItem';
import ToggleItem from './components/ToggleItem';
import ActionItem from './components/ActionItem';

// Import Data
import { userData, assetPaths, actionHandlers } from './data/sampleData';

function App() {
  // State for notifications toggle
  const [pushNotifications, setPushNotifications] = useState(
    userData.settings.pushNotifications
  );

  return (
    <div className="app-container">
      {/* App Header */}
      <AppHeader
        logo={assetPaths.logo}
        onSearch={actionHandlers.onSearch}
        notificationsCount={3}
        onSOSClick={actionHandlers.onSOSClick}
        onNotificationClick={actionHandlers.onNotificationClick}
        onProfileClick={actionHandlers.onProfileClick}
      />

      {/* Profile Header */}
      <ProfileHeader
        backgroundImage={assetPaths.topBackground}
        profileImage={userData.profile.profileImage}
        userName={userData.profile.userName}
        level={userData.profile.level}
        currentXP={userData.profile.currentXP}
        totalXP={userData.profile.totalXP}
      />

      {/* Stats Cards */}
      <StatsCards stats={userData.stats} />

      {/* Main Content */}
      <div className="main-content">
        {/* Personal Information */}
        <AccordionSection title="Personal Information" defaultExpanded={true}>
          {userData.personalInfo.map((info, index) => (
            <PersonalInfoItem
              key={index}
              label={info.label}
              value={info.value}
            />
          ))}
        </AccordionSection>

        {/* Features */}
        <AccordionSection title="Features" defaultExpanded={false}>
          {userData.features.map((feature, index) => (
            <FeatureListItem
              key={index}
              label={feature}
              onClick={() => actionHandlers.onFeatureClick(feature)}
            />
          ))}
        </AccordionSection>

        {/* Notification */}
        <AccordionSection title="Notification" defaultExpanded={false}>
          <ToggleItem
            label="Push Notification"
            isEnabled={pushNotifications}
            onToggle={(enabled) => {
              setPushNotifications(enabled);
              actionHandlers.onToggleNotification(enabled);
            }}
          />
        </AccordionSection>

        {/* Privacy & Legal Terms */}
        <AccordionSection title="Privacy & Legal Terms" defaultExpanded={false}>
          {userData.privacyItems.map((item, index) => (
            <ActionItem
              key={index}
              label={item}
              onClick={() => actionHandlers.onPrivacyItemClick(item)}
            />
          ))}
        </AccordionSection>

        {/* Account */}
        <AccordionSection title="Account" defaultExpanded={false}>
          {userData.accountActions.map((action, index) => (
            <ActionItem
              key={index}
              label={action.label}
              variant={action.variant}
              onClick={() => actionHandlers.onAccountActionClick(action.label)}
            />
          ))}
        </AccordionSection>

        {/* Other */}
        <AccordionSection title="Other" defaultExpanded={false}>
          {userData.otherActions.map((action, index) => (
            <ActionItem
              key={index}
              label={action.label}
              variant={action.variant}
              onClick={() => actionHandlers.onOtherActionClick(action.label)}
            />
          ))}
        </AccordionSection>
      </div>
    </div>
  );
}

export default App;
