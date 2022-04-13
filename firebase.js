import * as firebase from "firebase";
//require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDcvo5jbiewPRdrcrlse_ne0RpL3k-vjrI",
  authDomain: "optimos-57193.firebaseapp.com",
  projectId: "optimos-57193",
  storageBucket: "optimos-57193.appspot.com",
  messagingSenderId: "1020146917507",
  appId: "1:1020146917507:web:d7f1ebcc9f1c9237c7bbb6",
};

let app;

//
if (firebase.getApps().length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = firebase.auth();

export { auth };
