import React from 'react';
import './TopSectionFormButton.css';

class TopSectionFormButton extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <button className="top_section_button" type="submit" onSubmit={this.handleClick}>Search</button>
    );
  }
}
export default TopSectionFormButton;
