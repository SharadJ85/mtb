import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import myStore from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
