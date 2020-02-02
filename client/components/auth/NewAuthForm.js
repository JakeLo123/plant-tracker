import React, { useState } from 'react';
import { authorizeThunk } from '../../store/user';
import { connect } from 'react-redux';

const NewAuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('authenticated');
  }

  return (
    <div id="auth-form-container" className="form-container">
      <form>
        <label htmlFor="username">username</label>
        <input type="text" name="username" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

const mapDispatch = dispatch => ({
  authorize: (formData, method) => {
    dispatch(authorizeThunk(formData, method));
  },
});

export default connect(null, mapDispatch)(NewAuthForm);
