// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB43GbNryEW-XAYmnNtrILFO2_PrYxl6vk",
  authDomain: "react-glasses-page.firebaseapp.com",
  projectId: "react-glasses-page",
  storageBucket: "react-glasses-page.appspot.com",
  messagingSenderId: "173460034476",
  appId: "1:173460034476:web:72eb6ce9fc12e21deca009",
  measurementId: "G-XQZM5Z1C2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
