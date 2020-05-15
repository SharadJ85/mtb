import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../actions/auth/logInAction";
import {
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_STATE
} from "../../actions/auth/resetPasswordAction";
import {
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "../../actions/auth/logOutAction";
import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../../actions/auth/signUpAction";
import {
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "../../actions/auth/verifyAction";
import {
  GET_STORE_USER_DATA_FAILURE,
  GET_STORE_USER_DATA_REQUEST,
  GET_STORE_USER_DATA_SUCCESS,
} from "../../actions/auth/getUserStoreDataAction";

const FirebaseAuthReducer = (
  state = {
    verify: {
      isVerifying: false,
      isAuthenticated: false,
    },
    logIn: {
      isLoggingIn: false,
      logInError: false,
      errors: {}
    },
    resetPassword: {
      isResettingPassword: false,
      resetPasswordError: false,
      resetPasswordSuccess:false,
      errors: {}
    },
    logOut: {
      isLoggingOut: false,
      logOutError: false,
      errors: {}
    },
    signUp: {
      isSigningUp: false,
      signUpError: false,
      errors: {}
    },
    requestUserData: {
      isRequestUserData: false,
      requestUserDataError: false,
      errors: {}
    },
    user: {
      baseData: {},
      storeData: {},
    }
  },
  action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        logIn: {
          ...state.logIn,
          isLoggingIn: true,
          logInError: false,
          errors: {}
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        verify: {
          ...state.verify,
          isAuthenticated: true,
        },
        logIn: {
          ...state.logIn,
          isLoggingIn: false,
        },
        user: {
          ...state.user,
          baseData: action.baseData
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logIn: {
          ...state.logIn,
          isLoggingIn: false,
          logInError: true,
          errors: action.error,
        },
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        logOut: {
          isLoggingOut: true,
          logoutError: false,
          errors: {}
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        verify: {
          ...state.verify,
          isAuthenticated: false,
        },
        logOut: {
          ...state.logOut,
          isLoggingOut: false,
        },
        user: {
          baseData: {},
          storeData: {},
        },
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        logOut: {
          ...state.logOut,
          isLoggingOut: false,
          logoutError: true,
          errors: action.error
        },
      };
    case RESET_PASSWORD_STATE:
      return {
        ...state,
        resetPassword: {
          isResettingPassword: false,
          resetPasswordError: false,
          resetPasswordSuccess:false,
          errors: {}
        },
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          isResettingPassword: true,
          resetPasswordError: false,
          resetPasswordSuccess:false,
          errors: {}
        },
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          isResettingPassword: false,
          resetPasswordSuccess:true,
        },
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          isResettingPassword: false,
          resetPasswordError: true,
          errors: action.error
        },
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        verify: {
          ...state.verify,
          isVerifying: true,
        }
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        verify: {
          ...state.verify,
          isVerifying: false,
        }
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isSigningUp: true,
          signUpError: false,
          errors: {}
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isSigningUp: false,
        },
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          isSigningUp: false,
          signUpError: true,
          errors: action.error,
        },
      };
    case GET_STORE_USER_DATA_REQUEST:
      return {
        ...state,
        requestUserData: {
          ...state.requestUserData,
          isRequestUserData: true,
          requestUserDataError: false,
          errors: {}
        }
      };
    case GET_STORE_USER_DATA_SUCCESS:
      return {
        ...state,
        requestUserData: {
          ...state.requestUserData,
          isRequestUserData: false,
        },
        user: {
          ...state.user,
          storeData: action.userData
        }
      };
    case GET_STORE_USER_DATA_FAILURE:
      return {
        ...state,
        requestUserData: {
          isRequestUserData: false,
          requestUserDataError: true,
          errors: action.error
        },
      };
    default:
      return state;
  }
};
export default FirebaseAuthReducer;