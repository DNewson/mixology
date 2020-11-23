import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ITS BEST TO NOT CHANGE ANYTHING IN HERE, ESPECIALLY WHEN FIRST LEARNING REDUX, UNLESS YOU HAVE A 3RD PARTY
// PACKAGE THAT SPECIFICALLY SAYS TO INSTALL IN THIS FILE
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
