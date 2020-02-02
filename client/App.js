import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserThunk } from './store/user';
import { AuthFormContainer, MyPlants, Schedule } from './components';
import NewAuthForm from './components/newAuth/NewAuthForm';
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
      <Route path="/" component={MyPlants} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/signup" component={NewAuthForm} />
      <Route path="/login" component={NewAuthForm} />
      <Route path="/" component={NewAuthForm} />
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
