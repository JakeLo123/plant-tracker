import React from 'react';
import { AuthForm } from './components';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={AuthForm} />
      <Route path="/signup" component={AuthForm} />
      <Route path="/" component={AuthForm} />
    </Switch>
  );
};

export default App;
