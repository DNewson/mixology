import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ITS BEST TO NOT CHANGE ANYTHING IN HERE, ESPECIALLY WHEN FIRST LEARNING REACT, UNLESS YOU HAVE A 3RD PARTY
// PACKAGE THAT SPECIFICALLY SAYS TO INSTALL IN THIS FILE OR ARE USING REDUX, OR DOING ROUTING, ETC.

// IT MAY BE HELPFUL TO CONSIDER SRC/APP.JS TO BE THE ACTUAL ENTRY POINT FOR YOUR APP, AND IGNORE THIS FILE FOR NOW

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
