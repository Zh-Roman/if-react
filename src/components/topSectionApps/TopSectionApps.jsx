import React from 'react';
import './TopSectionApps.css';
import GoogleBadge from '../../assets/images/svg/google-play-badge.svg';
import AppleBadge from '../../assets/images/svg/App_Store_Badge.svg';

function TopSectionApps() {
  return (
    <div className="top_section_apps">
      <a href="/">
        <img src={GoogleBadge} alt="GoogleBadge" />
      </a>
      <a href="/">
        <img src={AppleBadge} alt="AppleBadge" />
      </a>
    </div>
  );
}

export default TopSectionApps;
