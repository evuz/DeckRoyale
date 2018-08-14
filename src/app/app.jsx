import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-family: sans-serif;
  font-size: 24px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: lightyellow;
`;

export const App = () => (
  <Container>
    <Text>Hello World</Text>
  </Container>
);
