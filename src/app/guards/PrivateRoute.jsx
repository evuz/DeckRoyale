import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

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
  component: PropTypes.any.isRequired, // eslint-disable-line
  user: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = ({ user }) => ({
  user,
});

export const PrivateRoute = withRouter(connect(mapStateToProps)(_PrivateRoute));
