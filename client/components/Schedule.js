import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Schedule extends React.Component {
  render() {
    return (
      <div className="nav-and-page-container">
        <Navbar />
        <h1>schedule...</h1>
      </div>
    );
  }
}

export default Schedule;
