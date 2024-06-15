// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
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

// Set authentication persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Persistencia de la autenticación configurada.');
  })
  .catch((error) => {
    console.error('Error al configurar la persistencia de la autenticación:', error);
  });
