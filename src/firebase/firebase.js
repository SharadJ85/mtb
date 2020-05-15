import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATIFQuTRc_y5K97Syeo3vKtiZz6jXYGxc",
  authDomain: "mtb-react.firebaseapp.com",
  databaseURL: "https://mtb-react.firebaseio.com",
  projectId: "mtb-react",
  storageBucket: "mtb-react.appspot.com",
  messagingSenderId: "53035531488",
  appId: "1:53035531488:web:4038755c9e71e95b872485",
  measurementId: "G-Z71B9BJCY4"
};

export const myFirebase = firebase;
export const myFirebaseApp = firebase.initializeApp(firebaseConfig);
export const myFirestoreApp = myFirebaseApp.firestore();