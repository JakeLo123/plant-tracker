import React from 'react';
import { addNewPlantThunk } from '../store/plants';
import { connect } from 'react-redux';

class AddPlantModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      waterAfter: 3,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewPlant(this.state);
    this.props.setShowModal(false);
  }

  render() {
    return (
      <div id="add-plant-modal">
        <form onSubmit={this.handleSubmit}>
          <div
            id="exit-modal"
            className="btn"
            onClick={() => this.props.setShowModal(false)}
          >
            exit
          </div>
          <h2>new plant</h2>
          <label htmlFor="name">plant's name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            required
          />
          <label htmlFor="waterAfter">water after</label>
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

const mapDispatch = dispatch => ({
  addNewPlant: newPlant => dispatch(addNewPlantThunk(newPlant)),
});

export default connect(null, mapDispatch)(AddPlantModal);
