import { Deck } from '../models/deck';

export const SET_DECKS = 'SET_DECKS';
export const ADD_DECK = 'ADD_DECKS';
export const MODIFY_DECK = 'MODIFY_DECK';
export const REMOVE_DECK = 'REMOVE_DECKS';

export function setDecks(decks) {
  return {
    type: SET_DECKS,
    payload: decks,
  };
}

export function addDeck(deck) {
  if (typeof deck === 'string') {
    deck = new Deck({ name: deck });
  }
  return {
    type: ADD_DECK,
    payload: deck,
  };
}
