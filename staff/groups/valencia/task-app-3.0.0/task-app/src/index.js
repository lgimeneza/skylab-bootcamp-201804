import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Taskapp from './components/Taskapp'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Taskapp />, document.getElementById('root'));

registerServiceWorker();
