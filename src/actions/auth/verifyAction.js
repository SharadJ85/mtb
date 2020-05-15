import {myFirebaseApp} from "../../firebase/firebase";
import {receiveLogin} from "./logInAction"
import {getUserData} from "./getUserStoreDataAction"

//actions types
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

//main actions
 export const verifyRequest = user => {
  return {
    type: VERIFY_REQUEST
  };
};

export const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

//functioning actions
export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  myFirebaseApp
    .auth()
    .onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(receiveLogin(user));
        dispatch(getUserData(user.uid));
      }
      dispatch(verifySuccess());
    });
};