import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import firebase from 'firebase/app';

import { User as UserModel } from '../models/user';

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

const Button = styled.button`
  height: 64px;
  width: 20%;
`;

const UserImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

class _User extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(UserModel),
  };

  static defaultProps = {
    user: null,
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    const { user } = this.props;
    return (
      <Container>
        <Text>
          <i className="material-icons">info_outline</i>
          Deck Royale
        </Text>
        <Button onClick={this.signOut}>Sign Out</Button>
        <UserImage src={user.photoURL} alt="user" />
        <Text>Name: {user.displayName}</Text> <Text>Email: {user.email}</Text>{' '}
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export const User = connect(mapStateToProps)(_User);
