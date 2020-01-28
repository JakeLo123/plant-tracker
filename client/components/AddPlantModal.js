import React from 'react';

class AddPlantModal extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      waterAfter: 3,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div id="add-plant-modal">
        <form>
          <h2>new plant</h2>
          <label htmlFor="name">username</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            required
          />
          <label htmlFor="waterAfter">password</label>
          <input
            onChange={this.handleChange}
            type="number"
            min="1"
            name="waterAfter"
            value={this.state.waterAfter}
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default AddPlantModal;
