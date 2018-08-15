import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';

import { Login } from './pages/Login';
import { User } from './pages/User';
import { PrivateRoute } from './guards/PrivateRoute';
import { PublicRoute } from './guards/PublicRoute';

export class App extends Component {
  state = { user: undefined };

  componentDidMount() {
    this.authListener();
  }

  componentWillUnmount() {
    this.authSubscribe();
  }

  authSubscribe = null;

  authListener = () => {
    this.authSubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, photoURL } = user;
        this.setState({
          user: { displayName, email, photoURL },
        });
      } else {
        this.setState({ user: undefined });
      }
    });
  };

  render() {
    const { user } = this.state;
    return (
      <Router>
        <Fragment>
          <PrivateRoute path="/user" user={user} component={User} />
          <PublicRoute path="/login" user={user} component={Login} route="/user" />
        </Fragment>
      </Router>
    );
  }
}
