import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Card } from '../components/Card';

import { cards as cardsRequest } from '../api/clashRoyale';

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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

// eslint-disable-next-line
class _ManageDeck extends Component {
  state = { cards: [] };
  componentDidMount() {
    cardsRequest().then(cards => {
      this.setState({ cards });
    });
  }

  render() {
    const { cards } = this.state;
    const cardsRender = cards.map(card => <Card key={card.key} card={card} />);
    return (
      <Container>
        <Text>Manage Deck</Text>
        <CardContainer>{cardsRender}</CardContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ decks }) => ({
  decks,
});

export const ManageDeck = connect(mapStateToProps)(_ManageDeck);
