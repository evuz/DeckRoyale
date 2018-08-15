import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        <Component {...props} user={user} />
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

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired, // eslint-disable-line
  user: PropTypes.object, // eslint-disable-line
};
