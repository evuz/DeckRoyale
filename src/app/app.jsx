import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';

import { Main } from './pages/Main';
import { ManageDeck } from './pages/ManageDeck';

import { signIn, signOut } from './actions/user';

export class _App extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  };

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
        this.props.signIn({ displayName, email, photoURL });
      } else {
        this.props.signOut();
      }
    });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={Main} />
          <Route path="/deck/:id" exact component={ManageDeck} />
        </Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  signIn,
  signOut,
};

export const App = connect(
  null,
  mapDispatchToProps,
)(_App);
