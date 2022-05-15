import React from 'react';
import styled from 'styled-components';
import SpriteSVG from '../spriteSVG/SpriteSVG';

const StyleTopSectionApps = styled.div`
  display: flex;
  justify-content: center;

  & a:nth-child(2) {
    margin-left: 16px;
  }
`;
const TopSectionAppsLink = styled.a`
  .app_store_badge {
    width: 120px;
    height: 40px;
  }

  .google_play_badge {
    width: 135px;
    height: 40px;
  }
`;

function TopSectionApps() {
  return (
    <StyleTopSectionApps>
      <TopSectionAppsLink href="/">
        <SpriteSVG className="google_play_badge" name="google_play_badge" />
      </TopSectionAppsLink>
      <TopSectionAppsLink href="/">
        <SpriteSVG className="app_store_badge" name="app_store_badge" />
      </TopSectionAppsLink>
    </StyleTopSectionApps>
  );
}

export default TopSectionApps;
