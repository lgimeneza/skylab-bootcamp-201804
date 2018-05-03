import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Calculator from './components/Calculator'

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Calculator operation={'+'} />, document.getElementById('root'));
registerServiceWorker();
