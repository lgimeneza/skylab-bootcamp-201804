import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'
import singingLabApi from 'api'

singingLabApi.token = function (token) {
  if (token) {
    sessionStorage.setItem('token', token)

    return
  }

  return sessionStorage.getItem('token')
}

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();

