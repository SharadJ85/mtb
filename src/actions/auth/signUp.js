import {myFirebase, myFirestore} from "../../firebase/firebase";
import {getUserData} from "./getUserStoreData"

//actions types
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

//main actions
const requestSignUp = () => {
  return {
    type: SIGNUP_REQUEST
  };
};
export const receiveSignUp = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};
export const signUpError = (error) => {
  return {
    type: SIGNUP_FAILURE,
    error
  };
};

//functioning actions
export const signUpUser = (firstName, lastName, email, password) => dispatch => {
  dispatch(requestSignUp());
  let enteredUserData = {
    initials: firstName[0] + lastName[0],
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(resp => {
      enteredUserData = {
        ...enteredUserData,
        id: resp.user.uid
      };
      return myFirestore
        .collection('users')
        .doc(resp.user.uid)
        .set(enteredUserData)
    })
    .then(() => {
      dispatch(receiveSignUp());
      dispatch(getUserData(enteredUserData.id));
    })
    .catch(error => {
      console.log(`action signUpError error==>${error}`);
      dispatch(signUpError(error));
    });
};