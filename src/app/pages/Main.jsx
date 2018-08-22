import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { User } from '../models/user';
import { LoginContainer } from '../containers/LogIn';
import { UserDecksContainer } from '../containers/UserDecks';

const Text = styled.p`
  font-family: sans-serif;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: lightyellow;
`;

const _Main = ({ user }) => (
  <Container>
    <Text>
      <i className="material-icons">info_outline</i>
      Deck Royale
    </Text>
    {user ? <UserDecksContainer /> : <LoginContainer />}
  </Container>
);

_Main.propTypes = {
  user: PropTypes.instanceOf(User),
};

_Main.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export const Main = connect(mapStateToProps)(_Main);
