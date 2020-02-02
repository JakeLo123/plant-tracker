import React from 'react';
import { logoutUserThunk } from '../store/user';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ logout }) => {
  return (
    <div id="navbar">
      <h1>tandem plant tracker</h1>
      <Link to="/plants">
        <div className="nav-item">my plants</div>
      </Link>
      <Link to="/schedule">
        <div className="nav-item">water schedule</div>
      </Link>
      <Link to="/login">
        <div className="nav-item" onClick={() => logout()}>
          logout
        </div>
      </Link>
    </div>
  );
};

const mapDispatch = dispatch => ({
  logout: () => dispatch(logoutUserThunk()),
});

export default connect(null, mapDispatch)(Navbar);
