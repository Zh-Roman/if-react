import React from 'react';
import '../../components/sectionContainer/containerStyles/containerStyles.css';
import './TopSection.css';
import TopSectionTitle from '../../components/topSection/topSectionTitle/TopSectionTitle';
import TopSectionForm from '../../components/topSection/topSectionForm/TopSectionForm';
import { AvailableHotels } from '../availableHotels/AvailableHotels';

class TopSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueFromInput: '',
    };
  }

  setValue = (value) => {
    this.setState({ valueFromInput: value });
  };

  render() {
    const { valueFromInput } = this.state;
    return (
      <div>
        <section className="top_section">
          <div className="top_section_container _container">
            <TopSectionTitle>
              Discover stays
              <br />
              to live, work or just relax
            </TopSectionTitle>
            <TopSectionForm setValue={this.setValue} />
          </div>
        </section>
        <AvailableHotels valueFromInput={valueFromInput} />
      </div>
    );
  }
}

export default TopSection;
