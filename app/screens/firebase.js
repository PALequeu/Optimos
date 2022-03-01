import { initializeApp, getApps, getApp } from "firebase/app";
require("firebase/auth");
import Constants from "expo-constants";
/* API_KEY="AIzaSyDcvo5jbiewPRdrcrlse_ne0RpL3k-vjrI"
AUTH_DOMAIN="optimos-57193.firebaseapp.com"
PROJECT_ID="optimos-57193"
STORAGE_BUCKET="optimos-57193.appspot.com"
MESSAGING_SENDER_ID="1020146917507"
APP_ID="1:1020146917507:web:d7f1ebcc9f1c9237c7bbb6"
 */
const firebaseConfig = {
  apiKey: "AIzaSyDcvo5jbiewPRdrcrlse_ne0RpL3k-vjrI",
  authDomain: "optimos-57193.firebaseapp.com",
  projectId: "optimos-57193",
  storageBucket: "optimos-57193.appspot.com",
  messagingSenderId: "1020146917507",
  appId: "1:1020146917507:web:d7f1ebcc9f1c9237c7bbb6",
};

let Firebase;
let k = 1;
console.log(getApps().length);
//
if (getApps().length === 0) {
  console.log("test 1");
  Firebase = initializeApp(firebaseConfig);
  console.log(typeof Firebase);
} else {
  console.log("test 2");
  getApp();
}
console.log(getApps().length);
console.log(typeof Firebase.auth);

export { Firebase };
