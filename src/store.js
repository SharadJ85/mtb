import allReducers from "./reducers";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import { verifyAuth } from "./actions/auth/verify";

const myMiddleware = (thunk);

const myStore = () => {
  const store= createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(myMiddleware))
  );
  store.dispatch(verifyAuth());
  return store;

};

export default myStore();