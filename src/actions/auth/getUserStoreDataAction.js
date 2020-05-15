import {myFirestoreApp} from "../../firebase/firebase";

//actions types
export const GET_STORE_USER_DATA_REQUEST = "GET_STORE_USER_DATA_REQUEST";
export const GET_STORE_USER_DATA_SUCCESS = "GET_STORE_USER_DATA_SUCCESS";
export const GET_STORE_USER_DATA_FAILURE = "GET_STORE_USER_DATA_FAILURE";

//main actions
const requestStoreUserData = () => {
  return {
    type: GET_STORE_USER_DATA_REQUEST,
  }
};

const receiveStoreUserData = (userData) => {
  return {
    type: GET_STORE_USER_DATA_SUCCESS,
    userData
  }
};

const storeUserDataError = (error) => {
  return {
    type: GET_STORE_USER_DATA_FAILURE,
    error
  }
};

//functioning actions
export const getUserData = userId => dispatch => {
  dispatch(requestStoreUserData());
  myFirestoreApp
    .collection(`users`)
    .doc(`${userId}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        dispatch(receiveStoreUserData(doc.data()));
      } else {
        dispatch(storeUserDataError({code: "auth/No-such-document!"}));
      }
    })
    .catch(error => {
      console.log(`action getUserData error==>${error}`);
      dispatch(storeUserDataError(error));
    });
};