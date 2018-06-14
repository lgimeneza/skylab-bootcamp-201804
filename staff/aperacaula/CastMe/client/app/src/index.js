import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import logic from './logic'

logic.userId = sessionStorage.getItem('userId')

ReactDOM.render(
<HashRouter>
    <App />
</HashRouter>
, document.getElementById('root'));
registerServiceWorker();
