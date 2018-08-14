import React from 'react';
import styled from 'styled-components';

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
  width: 100%;
  min-height: 100vh;
  background-color: lightyellow;
`;

export const App = () => (
  <Container>
    <Text>
      <i className="material-icons">info_outline</i>
      Hello World
    </Text>
  </Container>
);
