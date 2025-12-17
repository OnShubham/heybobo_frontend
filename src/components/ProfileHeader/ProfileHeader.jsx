import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({
    backgroundImage,
    profileImage,
    userName,
    level,
    currentXP,
    totalXP
}) => {
    const xpPercentage = (currentXP / totalXP) * 100;

    return (
        <div
            className="profile-header"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined
            }}
        >
            <div className="profile-header-content">
                {/* Profile Image with Level Badge */}
                <div className="profile-image-container">
                    <img src={profileImage} alt={userName} className="profile-image" />
                    <div className="level-badge">{level}</div>
                </div>

                {/* User Name */}
                <h2 className="user-name">{userName}</h2>

                {/* XP Progress */}
                <div className="xp-container">
                    <div className="xp-bar-wrapper">
                        <div
                            className="xp-bar-fill"
                            style={{ width: `${xpPercentage}%` }}
                        />
                    </div>
                    <p className="xp-text">
                        {currentXP} / {totalXP} XP
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
