import allReducers from "./reducers/indexReducer";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import { verifyAuth } from "./actions/auth/verifyAction";

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