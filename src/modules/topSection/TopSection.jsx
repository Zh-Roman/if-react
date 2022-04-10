import React, { useState } from 'react';
import './TopSection.css';
import TopSectionTitle from '../../components/topSectionTitle/TopSectionTitle';
import TopSectionForm from '../../components/topSectionForm/TopSectionForm';
import { AvailableHotels } from '../availableHotels/AvailableHotels';
import TopSectionApps from '../../components/topSectionApps/TopSectionApps';

function TopSection() {
  const [valueFromInput, getValueFromInput] = useState('');
  return (
    <div>
      <section className="top_section">
        <div className="top_section_container _container">
          <TopSectionTitle>
            Discover stays
            <br />
            to live, work or just relax
          </TopSectionTitle>
          <TopSectionForm
            getValueFromInput={getValueFromInput}
          />
          <TopSectionApps />
        </div>
      </section>
      <AvailableHotels
        valueFromInput={valueFromInput}
      />
    </div>
  );
}

export default TopSection;
