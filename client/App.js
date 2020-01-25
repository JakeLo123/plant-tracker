import React, { useEffect, useState } from 'react';
import { AuthForm } from './components';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios
      .get('/auth/me')
      .then(res => console.log('there is a session: ', res.data))
      .catch(e => console.log('error: ', e));
  });

  return (
    <Switch>
      <Route path="/login" component={AuthForm} />
      <Route path="/signup" component={AuthForm} />
      <Route path="/" component={AuthForm} />
    </Switch>
  );
};

export default App;
