import React, { useState } from 'react';
// import { authorizeThunk } from '../../store/user';
// import { connect } from 'react-redux';
import useValidation from './useValidation';
import validateAuth from './validateAuth';

const INITIAL_STATE = {
  username: '',
  password: '',
};

const NewAuthForm = props => {
  const method = 'login';
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    loading,
  } = useValidation(INITIAL_STATE, validateAuth);

  return (
    <div id="auth-form-container" className="form-container">
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
        {errors.username && <small>{errors.username}</small>}
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          className={errors.password && 'error-input'}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.username && <small>{errors.username}</small>}
        <button type="submit" disabled={loading}>
          {method}
        </button>
      </form>
    </div>
  );
};

// const mapDispatch = dispatch => ({
//   authorize: (formData, method) => {
//     dispatch(authorizeThunk(formData, method));
//   },
// });

export default NewAuthForm;
