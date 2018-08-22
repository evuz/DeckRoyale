import { SET_DECKS, ADD_DECK } from '../actions/decks';

export function decks(state = [], { type, payload }) {
  switch (type) {
    case SET_DECKS:
      return payload;
    case ADD_DECK:
      return state.concat(payload);
    default:
      return state;
  }
}
