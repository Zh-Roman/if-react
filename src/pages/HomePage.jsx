import React from 'react';
import TopSection from '../modules/topSection/TopSection';
import HomesGuestsLovesSection from '../modules/homesGuestsLovesSection/HomesGuestsLovesSection';
import WhatDoWeOffer from '../modules/whatDoWeOffer/WhatDoWeOffer';
import TheBestDestinations from '../modules/theBestDestinations/TheBestDestinations';

function HomePage() {
  return (
    <div>
      <TopSection />
      <WhatDoWeOffer />
      <HomesGuestsLovesSection />
      <TheBestDestinations />
    </div>
  );
}

export default HomePage;
