import React from 'react';
import './AdvantagesContent.css';
import AdvantagesCard from './AdvantagesCard';

function AdvantagesContent() {
  return (
    <div className="advantages_content">
      <AdvantagesCard advantageType="support" advantageTitle="Support 24/7" />
      <AdvantagesCard advantageType="communicate" advantageTitle="Communicate directly" />
      <AdvantagesCard advantageType="booking" advantageTitle="Book online" />
      <AdvantagesCard advantageType="review" advantageTitle="Real guest reviews" />

    </div>
  );
}

export default AdvantagesContent;
