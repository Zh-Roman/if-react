import React from 'react';
import AdvantagesCard from './AdvantagesCard';
import StyleAdvantagesContent from './StyleAdvantagesContent';

function AdvantagesContent() {
  return (
    <StyleAdvantagesContent>
      <AdvantagesCard advantageType="support" advantageTitle="Support 24/7" />
      <AdvantagesCard advantageType="communicate" advantageTitle="Communicate directly" />
      <AdvantagesCard advantageType="booking" advantageTitle="Book online" />
      <AdvantagesCard advantageType="review" advantageTitle="Real guest reviews" />
    </StyleAdvantagesContent>
  );
}

export default AdvantagesContent;
