import React from 'react';
import './TopSectionApps.css';
import SpriteSVG from '../spriteSVG/SpriteSVG';

function TopSectionApps() {
  return (
    <div className="top_section_apps">
      <a href="/">
        <SpriteSVG className="google_play_badge" name="google_play_badge" />
      </a>
      <a href="/">
        <SpriteSVG className="app_store_badge" name="app_store_badge" />
      </a>
    </div>
  );
}

export default TopSectionApps;
