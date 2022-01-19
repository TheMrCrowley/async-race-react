import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './app.css';

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-overflow: ellipsis;
    -webkit-user-select: none;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body {
    font-family: 'Roboto';
  }
  button {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    color: #fff;
  }
`;

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root')
);
