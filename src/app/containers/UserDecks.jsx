import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import styled from 'styled-components';

import { User } from '../models/user';
import { Deck } from '../models/deck';

import { setDecks, addDeck } from '../actions/decks';
import { NewField } from '../components/NewField';

const Text = styled.p`
  font-size: 24px;
  color: lightgray;
`;

export class _UserDecksContainer extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(User),
    decks: PropTypes.arrayOf(PropTypes.instanceOf(Deck)),
    setDecks: PropTypes.func.isRequired,
    addDeck: PropTypes.func.isRequired,
  };

  static defaultProps = {
    user: null,
    decks: [],
  };

  componentDidMount() {
    const { user } = this.props;
    firebase
      .firestore()
      .collection('users')
      .doc(user.email)
      .collection('decks')
      .get()
      .then(collection => {
        const decks = collection.docs.map(doc => new Deck(doc.data()));
        this.props.setDecks(decks);
      });
  }

  addDeck = value => {
    const { user } = this.props;
    firebase
      .firestore()
      .collection('users')
      .doc(user.email)
      .collection('decks')
      .add({
        name: value,
      }).then(() => {
        this.props.addDeck(value);
      })
  };

  render() {
    const { decks } = this.props;
    const decksComponents = decks.map((deck, i) => <Text key={i}>{deck.name}</Text>);
    return (
      <Fragment>
        <p>User Decks</p>
        {decksComponents}
        <NewField newField={this.addDeck} />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user, decks }) => ({
  user,
  decks,
});

const mapDispatchToProps = {
  setDecks,
  addDeck,
};

export const UserDecksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_UserDecksContainer);
