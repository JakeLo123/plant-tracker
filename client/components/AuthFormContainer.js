import React from 'react';
import { authorizeThunk } from '../store/user';
import { connect } from 'react-redux';
import AuthForm from './AuthForm';
import { Redirect } from 'react-router-dom';

class AuthFormContainer extends React.Component {
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
    const formData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.authorize(formData, this.state.authMethod);
    this.props.history.push('/plants');
  }

  changeAuthMethod(method) {
    this.setState({ authMethod: method });
    this.props.history.push(`/${method}`);
  }

  render() {
    return (
      <div id="login-signup-container">
        <h2>{this.state.authMethod}</h2>
        <AuthForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={this.state.username}
          password={this.state.password}
          authMethod={this.state.authMethod}
          changeAuthMethod={this.changeAuthMethod}
        />
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  authorize: (formData, method) => {
    dispatch(authorizeThunk(formData, method));
  },
});

export default connect(null, mapDispatch)(AuthFormContainer);
