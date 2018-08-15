import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, user, route, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !user ? (
        <Component user={user} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: route,
          }}
        />
      )
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.any.isRequired, // eslint-disable-line
  route: PropTypes.string.isRequired,
  user: PropTypes.object, // eslint-disable-line
};
