import React from 'react';
import './styles/fonts.css';
import './styles/App.css';
import HomesGuestsLovesSection from './modules/homesGuestsLovesSection/HomesGuestsLovesSection';
import TopSection from './modules/topSection/TopSection';

function App() {
  return (
    <div className="App">
      <main className="page">
        <TopSection />
        <HomesGuestsLovesSection />
      </main>
    </div>
  );
}

export default App;
