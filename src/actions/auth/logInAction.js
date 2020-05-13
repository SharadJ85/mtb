import {myFirebaseApp} from "../../firebase/firebase";
import {getUserData} from "./getUserStoreDataAction";

//actions types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//main actions
export const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const receiveLogin = baseData => {
  return {
    type: LOGIN_SUCCESS,
    baseData
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};

//functioning actions
export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  myFirebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(resp => {
      dispatch(receiveLogin(resp));
      dispatch(getUserData(resp.user.uid));
    })
    .catch(error => {
      console.log(`action loginUser error==>${error}`);
      dispatch(loginError(error));
    });
};