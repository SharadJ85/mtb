import {myFirebaseApp} from "../../firebase/firebase";


//actions types
export const RESET_PASSWORD_STATE = "RESET_PASSWORD_STATE";
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";

//main actions
export const resetPasswordState = () => {
  return {
    type: RESET_PASSWORD_STATE
  };
};
export const requestResetPassword = () => {
  return {
    type: RESET_PASSWORD_REQUEST
  };
};
export const receiveResetPassword = () => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
};
export const resetPasswordError = (error) => {
  return {
    type: RESET_PASSWORD_FAILURE,
    error
  };
};

export const resetPassword = (email) => dispatch => {
  dispatch(requestResetPassword());
  myFirebaseApp
    .auth()
    .sendPasswordResetEmail(email)
    .then(dispatch(receiveResetPassword()))
    .catch((error) => {
      console.log(`action resetPassword error==>${error}`);
      dispatch(resetPasswordError(error));
    })
};
