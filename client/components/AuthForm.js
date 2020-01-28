import React from 'react';
import { authorizeThunk } from '../store/user';
import { connect } from 'react-redux';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      authMethod: this.props.location.pathname.slice(1),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeAuthMethod = this.changeAuthMethod.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/plants');
    const formData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.authorize(formData, this.state.authMethod);
  }

  changeAuthMethod(method) {
    this.setState({ authMethod: method });
    this.props.history.push(`/${method}`);
  }

  render() {
    const pathname =
      this.props.location.pathname === '/login' ? 'login' : 'signup';
    return (
      <div id="login-signup-container">
        <div id="auth-method-options">
          <h1 onClick={() => this.changeAuthMethod('login')}>login</h1>
          <h1 onClick={() => this.changeAuthMethod('signup')}>signup</h1>
        </div>
        <UsernameAndEmail
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={this.state.username}
          password={this.state.password}
          pathname={this.state.authMethod}
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
