import React from 'react';

const AuthForm = props => {
  const {
    handleChange,
    handleSubmit,
    username,
    password,
    authMethod,
    changeAuthMethod,
  } = props;
  const otherMethod = authMethod === 'login' ? 'signup' : 'login';
  return (
    <form onSubmit={handleSubmit} id="username-and-email">
      <label htmlFor="username">username</label>
      <input
        onChange={handleChange}
        type="text"
        name="username"
        value={username}
        required
      />
      <label htmlFor="password">password</label>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        value={password}
        required
      />
      <button type="submit">{authMethod}</button>
      <p id="change-auth-method" onClick={() => changeAuthMethod(otherMethod)}>
        {otherMethod} instead
      </p>
    </form>
  );
};

export default AuthForm;
