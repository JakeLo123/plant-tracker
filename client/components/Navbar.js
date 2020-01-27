import React from 'react';
import { logoutUserThunk } from '../store/user';
import { connect } from 'react-redux';

const Navbar = ({ logout }) => {
  return (
    <div id="navbar">
      <h1>tandem plant tracker</h1>
      <div className="nav-item">my plants</div>
      <div className="nav-item">water schedule</div>
      <div className="nav-item" onClick={() => logout()}>
        logout
      </div>
    </div>
  );
};

const mapDispatch = dispatch => ({
  logout: () => dispatch(logoutUserThunk()),
});

export default connect(null, mapDispatch)(Navbar);
