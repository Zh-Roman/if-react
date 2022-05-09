import React, { useEffect, useRef } from 'react';
import './TopSection.css';
import TopSectionTitle from '../../components/topSectionTitle/TopSectionTitle';
import TopSectionForm from '../../components/topSectionForm/TopSectionForm';
import TopSectionApps from '../../components/topSectionApps/TopSectionApps';

function TopSection(props) {
  const topScreenRef = useRef(null);
  useEffect(() => {
    props.setRef(topScreenRef);
  }, [props.loading]);
  return (
    <div>
      <section className="top_section" ref={topScreenRef}>
        <div className="top_section_container _container">
          <TopSectionTitle>
            Discover stays
            <br />
            to live, work or just relax
          </TopSectionTitle>
          <TopSectionForm />
          <TopSectionApps />
        </div>
      </section>
    </div>
  );
}

export default TopSection;
