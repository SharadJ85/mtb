import allReducers from "./reducers";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const myMiddleware = (thunk);

const myStore = () => {
  return createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(myMiddleware))
  )
};

export default myStore();