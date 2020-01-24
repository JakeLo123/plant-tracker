import React from 'react';
import axios from 'axios';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    // axios.post(`/auth/`);
  }

  render() {
    const pathname =
      this.props.location.pathname === '/login' ? 'Login' : 'Signup';
    return (
      <UsernameAndEmail
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        username={this.state.username}
        password={this.state.password}
        pathname={pathname}
      />
    );
  }
}

const UsernameAndEmail = props => {
  const { handleChange, handleSubmit, username, password, pathname } = props;
  return (
    <form>
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

export default AuthForm;
