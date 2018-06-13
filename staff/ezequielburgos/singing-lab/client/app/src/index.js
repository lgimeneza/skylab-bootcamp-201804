import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'
import singingLabApi from 'api'
import logic from './logic'

singingLabApi.token = function (token) {
  if (token) {
    sessionStorage.setItem('token', token)

    return
  }

  return sessionStorage.getItem('token')
}

logic.userId = function (userId) {
  if (userId) {
    sessionStorage.setItem('userId', userId)

    return
  }

  return sessionStorage.getItem('userId')
}

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();

