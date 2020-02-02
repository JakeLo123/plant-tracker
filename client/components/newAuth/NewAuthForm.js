import React from 'react';
import { authorizeThunk } from '../../store/user';
import { connect } from 'react-redux';
import useValidation from './useValidation';

const INITIAL_STATE = {
  username: '',
  password: '',
  method: 'login',
};

const NewAuthForm = props => {
  const { handleChange, values } = useValidation(INITIAL_STATE);
  const { username, password, method } = values;
  const otherMethod = method === 'login' ? 'signup' : 'login';

  function handleSubmit(event) {
    event.preventDefault();
    props.authorize({ username, password }, method);
  }

  return (
    <div id="auth-form-container" className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label htmlFor="password">password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">{method}</button>
      </form>
      <p
        onClick={e => {
          e.target.name = 'method';
          e.target.value = otherMethod;
          handleChange(e);
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
