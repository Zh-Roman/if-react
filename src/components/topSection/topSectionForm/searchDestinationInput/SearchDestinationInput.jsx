import React from 'react';
import './SearchDestinationInput.css';

class SearchDestinationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueFromInput: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      valueFromInput: e.target.value,
    });
    this.props.getValue(e.target.value);
  };

  render() {
    const { valueFromInput } = this.state;
    return (
      <input
        className="search_destination_input"
        type="text"
        value={valueFromInput}
        onChange={this.handleChange}
        placeholder="Your destination or hotel name"
        required
      />
    );
  }
}
export default SearchDestinationInput;
