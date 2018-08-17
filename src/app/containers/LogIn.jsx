import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';

const Button = styled.button`
  height: 64px;
  width: 20%;
`;

export class LoginContainer extends Component {
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
    return <Button onClick={this.googleRegister}>Google Sign In</Button>;
  }
}
