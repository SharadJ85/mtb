import {myFirebase, myFirebaseApp, myFirestoreApp} from "../../firebase/firebase";
import {verifyAuth} from "./verifyAction";
import {loginError, receiveLogin, requestLogin} from "./logInAction";
import {receiveSignUp, requestSignUp, signUpError} from "./signUpAction";

export const signInSignUpWithGoogle = () => dispatch => {
  dispatch(requestLogin());
  dispatch(requestSignUp());
  const googleProvider = new myFirebase.auth.GoogleAuthProvider();
  //-------------------------
  // with Redirect page and not pop up window
  //-------------------------
  // myFirebaseApp
  //   .auth()
  //   .signInWithRedirect(googleProvider)
  //   .catch(error => {
  //     console.log(`action->signUpError chain->signInWithRedirect error==>${error}`);
  //     dispatch(signUpError(error));
  //   });
  // myFirebaseApp
  //   .auth()
  //   .getRedirectResult()
  //-------------------------
  myFirebaseApp
    .auth()
    .signInWithPopup(googleProvider)
    .then((resp) => {
      dispatch(receiveLogin(resp));
      dispatch(receiveSignUp());
      if (resp.user) {
        return myFirestoreApp
          .collection('users')
          .doc(resp.user.uid)
          .set({
            id: resp.user.uid,
            initials: `${resp.user.displayName.slice(0, 1)}${resp.user.displayName.indexOf(' ') > 0
              ? resp.user.displayName.slice(resp.user.displayName.indexOf(' ') + 1, resp.user.displayName.indexOf(' ') + 2)
              : null}`,
            firstName: resp.user.displayName.slice(0, resp.user.displayName.indexOf(' ')),
            lastName: `${resp.user.displayName.indexOf(' ') > 0
              ? resp.user.displayName.slice(resp.user.displayName.indexOf(' '))
              : null}`,
            email: resp.user.email,
          });
      }
    })
    .then(() => {
      dispatch(verifyAuth());
      console.log("signUpWithGoogle==>success");
    })
    .catch(error => {
      console.log(`action->signUpError,chain->getRedirectResult,error is==>${error}`);
      dispatch(loginError(error));
      dispatch(signUpError(error));
    });
};