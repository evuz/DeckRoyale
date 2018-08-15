/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import { App } from './app/app';
import { firebaseConfig } from './firebase';
import './assets/reset.css';

if (firebase.apps.length) {
  firebase.app();
} else {
  firebase.initializeApp(firebaseConfig);
}
ReactDOM.render(<App />, document.getElementById('app'));
