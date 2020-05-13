import {myFirebaseApp} from "../../firebase/firebase";

//actions types
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

//main actions
export const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

export const receiveLogout = user => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const logoutError = (error) => {
  return {
    type: LOGOUT_FAILURE,
    error
  };
};

//functioning actions
export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  myFirebaseApp
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      console.log(`action logoutUser error==>${error}`);
      dispatch(logoutError(error));
    });
};