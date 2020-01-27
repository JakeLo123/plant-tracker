import React from 'react';
import { authorizeThunk } from '../store/user';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const pathname =
      this.props.location.pathname === '/login' ? 'login' : 'signup';
    // const isLoggedIn = this.props.user.id;
    return (
      <div id="login-signup-container">
        <h1>{pathname}</h1>
        <UsernameAndEmail
          handleChange={this.handleChange}
          handleSubmit={event => {
            event.preventDefault();
            this.props.authorize(this.state, pathname);
          }}
          username={this.state.username}
          password={this.state.password}
          pathname={pathname}
        />
      </div>
    );
  }
}

const UsernameAndEmail = props => {
  const { handleChange, handleSubmit, username, password, pathname } = props;
  return (
    <form onSubmit={handleSubmit} id="username-and-email">
      <label htmlFor="username">username</label>
      <input
        onChange={handleChange}
        type="text"
        name="username"
        value={username}
      />
      <label htmlFor="password">password</label>
      <input
        onChange={handleChange}
        type="text"
        name="password"
        value={password}
      />
      <button type="submit">{pathname}</button>
    </form>
  );
};

// const mapState = state => ({
//   user: state.user,
// });

const mapDispatch = dispatch => ({
  authorize: (formData, method) => dispatch(authorizeThunk(formData, method)),
});

export default connect(null, mapDispatch)(AuthForm);
