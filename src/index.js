import React from 'react';
import ReactDOM from 'react-dom';
import Config from './config';
import App from './App';
import './index.css';

ReactDOM.render(
  <Config>
    <App />
  </Config>,
  document.getElementById('root')
);
