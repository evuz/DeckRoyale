import { createStore, combineReducers } from 'redux';

import { user } from './app/reducers/user';

export function configureStore() {
  const appReducers = combineReducers({ user });
  let enhacer;
  if (process.env.NODE_ENV !== 'production') {
    enhacer = window.devToolsExtension ? window.devToolsExtension() : f => f;
  }

  return createStore(appReducers, enhacer);
}
