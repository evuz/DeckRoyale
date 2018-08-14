import React from 'react';
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

function register() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

export const App = () => (
  <Container>
    <Text>
      <i className="material-icons">info_outline</i>
      Hello World
    </Text>
    <Button onClick={register}>Google Sign In</Button>
  </Container>
);
