import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/auth/logIn";
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../actions/auth/logOut";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../actions/auth/signUp";
import {
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "../actions/auth/verify";
import {
  GET_STORE_USER_DATA_REQUEST,
  GET_STORE_USER_DATA_SUCCESS,
  GET_STORE_USER_DATA_FAILURE
} from "../actions/auth/getUserStoreData";

const FirebaseAuthReducer = (
  state = {
    isVerifying: false,
    isAuthenticated: false,
    isLoggingIn: false,
    loginError: false,
    isLoggingOut: false,
    logoutError: false,
    isSigningUp: false,
    signUpError: false,
    requestUserData: false,
    requestUserDataError: false,
    errors:{
      logIn:{},
      logOut:{},
      signUp:{},
      requestUserData:{}
    },
    user: {
      baseData: {},
      storeData: {}
    }
  },
  action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: {
          ...state.user,
          baseData: action.baseData
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        errors:{
          ...state.errors,
          logIn:action.error,
        }
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {
          baseData: {},
          storeData: {}
        }
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
        errors:{
          ...state.errors,
          logOut:action.error,
        }
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        signUpError: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        signUpError: true,
        errors:{
          ...state.errors,
          signUp:action.error,
        }
      };
    case GET_STORE_USER_DATA_REQUEST:
      return {
        ...state,
        requestUserData: true,
        requestUserDataError: false,

      };
    case GET_STORE_USER_DATA_SUCCESS:
      return {
        ...state,
        requestUserData: false,
        user: {
          ...state.user,
          storeData: action.userData
        }
      };
    case GET_STORE_USER_DATA_FAILURE:
      return {
        ...state,
        requestUserData: false,
        requestUserDataError: true,
        errors:{
          ...state.errors,
          requestUserData:action.error,
        }
      };
    default:
      return state;
  }
};
export default FirebaseAuthReducer;