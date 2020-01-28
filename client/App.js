import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserThunk } from './store/user';
import { AuthForm, MyPlants, Schedule } from './components';
import { Switch, Route } from 'react-router-dom';

const App = props => {
  useEffect(() => {
    props.getUser();
  }, []);

  const userLoggedIn = props.user.id;
  return userLoggedIn ? (
    <Switch>
      <Route path="/plants" component={MyPlants} />
      <Route path="/schedule" component={Schedule} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/signup" component={AuthForm} />
      <Route path="/login" component={AuthForm} />
      <Route path="/" component={AuthForm} />
    </Switch>
  );
};

const mapState = state => ({
  user: state.user,
});

const mapDispatch = dispatch => {
  return {
    getUser() {
      dispatch(getUserThunk());
    },
  };
};

export default connect(mapState, mapDispatch)(App);
