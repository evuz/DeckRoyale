/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from './firebase';
import { configureStore } from './store';
import { App } from './app/app';
import './assets/reset.css';

if (firebase.apps.length) {
  firebase.app();
} else {
  firebase.initializeApp(firebaseConfig);
}

firebase.firestore().settings({ timestampsInSnapshots: true });
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
