import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import { createGlobalStyle } from 'styled-components'
import {store} from './store/index'
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }
  #root {
    width: 100vw;
  }  
  body {
      display: flex;
      background-color: #FCFCFC;
      color: #444749;
      margin: 0;
      padding: 4vw;
    }
`


ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
