import React from 'react';
import './ProfileHeader.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const ProfileHeader = ({
    backgroundImage,
    profileImage,
    userName,
    level,
    currentXP,
    totalXP
}) => {


    return (<>
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
                    <ProgressBar
                        current={currentXP}
                        total={totalXP}
                        label={`${currentXP} / ${totalXP} XP`}
                    />
                </div>
            </div>
        </div>
    </>
    );
};

export default ProfileHeader;
