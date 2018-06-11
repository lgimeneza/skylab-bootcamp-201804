import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.min.css';
import clientApi from 'client-api';
import clientLogic from 'client-logic';

clientApi.token = function (token) {
    if (token) {
      sessionStorage.setItem('token', token)
  
      return
    }
    return sessionStorage.getItem('token')
  }

  clientLogic.userId = function (userId) {
    if (userId) {
      sessionStorage.setItem('userId', userId)

      return
    }
    return sessionStorage.getItem('userId')
  }

ReactDOM.render(
    <Router> 
        <App /> 
    </Router>,
        document.getElementById('root'));
registerServiceWorker();
