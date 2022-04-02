import React from 'react';
import './TopSectionForm.css';
import SearchDestinationInput from './searchDestinationInput/SearchDestinationInput';
import TopSectionFormButton from './topSectionFromButton/TopSectionFormButton';

class TopSectionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueFromInput: '',
    };
  }

  getValue = (value) => {
    this.setState({ valueFromInput: value });
  };

  render() {
    const { valueFromInput } = this.state;
    return (
      <form
        className="top_section_form"
        action="#"
        method="get"
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          this.props.setValue(valueFromInput);
        }}
      >
        <SearchDestinationInput getValue={this.getValue} />
        <TopSectionFormButton />
      </form>
    );
  }
}

export default TopSectionForm;
