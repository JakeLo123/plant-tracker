import React, { useState } from 'react';
import { authorizeThunk } from '../../store/user';
import { connect } from 'react-redux';
import useValidation from './useValidation';
import validateAuth from './validateAuth';

const INITIAL_STATE = {
  username: '',
  password: '',
};

const NewAuthForm = props => {
  const pathname =
    props.location.pathname.slice(1) === 'signup' ? 'signup' : 'login';
  const otherMethod = pathname === 'signup' ? 'login' : 'signup';
  const [method, setMethod] = useState(pathname);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    loading,
  } = useValidation(INITIAL_STATE, validateAuth, authenticateUser);

  function authenticateUser() {
    try {
      props.authenticate(values, method);
    } catch (err) {
      console.error('auth error', err);
    }
  }

  return (
    <div id="auth-form-container" className="form-container">
      <h1>Tandem Plant tracker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          value={values.username}
          className={errors.username && 'error-input'}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.username && (
          <small className="error-msg">* {errors.username}</small>
        )}
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          className={errors.password && 'error-input'}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && (
          <small className="error-msg">* {errors.password}</small>
        )}
        <button type="submit" disabled={loading}>
          {method}
        </button>
      </form>
      <div
        id="method-option"
        onClick={() => {
          setMethod(otherMethod);
          props.history.push(`/${otherMethod}`);
        }}
      >
        {otherMethod} instead
      </div>
    </div>
  );
};

const mapDispatch = dispatch => ({
  authenticate: (formData, method) => {
    dispatch(authorizeThunk(formData, method));
  },
});

export default connect(null, mapDispatch)(NewAuthForm);
