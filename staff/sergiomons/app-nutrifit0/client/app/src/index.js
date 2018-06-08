import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import clientApi from 'client-api';

clientApi.token = function (token) {
    if (token) {
      sessionStorage.setItem('token', token)
  
      return
    }
  
    return sessionStorage.getItem('token')
  }

ReactDOM.render(
    <Router> 
        <App /> 
    </Router>,
        document.getElementById('root'));
registerServiceWorker();
