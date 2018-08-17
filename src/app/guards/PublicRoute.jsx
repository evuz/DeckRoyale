import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { User } from '../models/user';

const _PublicRoute = ({ component: Component, user, route, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !user ? (
        <Component user={rest.user} {...props} />
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

_PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
  user: PropTypes.instanceOf(User),
};

_PublicRoute.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export const PublicRoute = withRouter(connect(mapStateToProps)(_PublicRoute));
