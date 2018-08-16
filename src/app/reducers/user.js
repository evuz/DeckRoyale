import { SIGN_IN, SIGN_OUT } from '../actions/user';

export function user(state = null, { type, payload }) {
  switch (type) {
    case SIGN_IN:
      return payload;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
}
