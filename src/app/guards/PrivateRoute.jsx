import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { User } from '../models/user';

const _PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    }
  />
);

_PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(User),
};

_PrivateRoute.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export const PrivateRoute = withRouter(connect(mapStateToProps)(_PrivateRoute));
