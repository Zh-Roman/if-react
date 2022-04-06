import React, { useState } from 'react';
import '../../components/sectionContainer/containerStyles/containerStyles.css';
import './TopSection.css';
import TopSectionTitle from '../../components/topSection/topSectionTitle/TopSectionTitle';
import TopSectionForm from '../../components/topSection/topSectionForm/TopSectionForm';
import { AvailableHotels } from '../availableHotels/AvailableHotels';

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
        </div>
      </section>
      <AvailableHotels
        valueFromInput={valueFromInput}
      />
    </div>
  );
}

export default TopSection;
