import React, { useState } from 'react';
import { authorizeThunk } from '../../store/user';
import { connect } from 'react-redux';
import useValidation from './useValidation';

const NewAuthForm = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [method, setMethod] = useState('login');
  const otherMethod = method === 'login' ? 'signup' : 'login';

  function handleSubmit(event) {
    event.preventDefault();
    props.authorize({ username, password }, method);
    console.log('authenticated!', { username, password });
  }

  return (
    <div id="auth-form-container" className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">{method}</button>
      </form>
      <p
        onClick={() => {
          setMethod(otherMethod);
          props.history.push(`/${otherMethod}`);
        }}
      >
        {otherMethod} instead
      </p>
    </div>
  );
};

const mapDispatch = dispatch => ({
  authorize: (formData, method) => {
    dispatch(authorizeThunk(formData, method));
  },
});

export default connect(null, mapDispatch)(NewAuthForm);
