import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

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
  component: PropTypes.any.isRequired, // eslint-disable-line
  route: PropTypes.string.isRequired,
  user: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = ({ user }) => ({
  user,
});

export const PublicRoute = withRouter(connect(mapStateToProps)(_PublicRoute));
