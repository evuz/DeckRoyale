import React, { Component } from 'react';
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

export class Login extends Component {
  googleRegister = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <Text>
          <i className="material-icons">info_outline</i>
          Deck Royale
        </Text>
        <Button onClick={this.googleRegister}>Google Sign In</Button>
      </Container>
    );
  }
}
