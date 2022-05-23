// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4RGK8hWIDN93VDFPi0vAX1sk-SUgREWs",
  authDomain: "bddoptimos.firebaseapp.com",
  projectId: "bddoptimos",
  storageBucket: "bddoptimos.appspot.com",
  messagingSenderId: "68022704335",
  appId: "1:68022704335:web:0389644cf25e893ae0ffba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
