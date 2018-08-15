import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';

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

export class App extends Component {
  state = { user: null };
  
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
        this.setState({ user: null });
      }
    });
  };

  googleRegister = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch(err => {
        console.log(err);
      });
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    const { user } = this.state;
    return (
      <Container>
        <Text>
          <i className="material-icons">info_outline</i>
          Deck Royale
        </Text>
        {!user ? (
          <Button onClick={this.googleRegister}>Google Sign In</Button>
        ) : (
          <Button onClick={this.signOut}>Sign Out</Button>
        )}
        {user ? (
          <Fragment>
            <UserImage src={user.photoURL} alt="user" />
            <Text>Name: {user.displayName}</Text> <Text>Email: {user.email}</Text>{' '}
          </Fragment>
        ) : null}
      </Container>
    );
  }
}
