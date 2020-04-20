import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import allReducers from "./reducers";

const myMiddleWare=applyMiddleware(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <React.StrictMode>
  <Provider store={myStore}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
