import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBytJIZqYzceTXILAJPYqJ-likN8bB0HbU",
    authDomain: "secondary-project-44f2a.firebaseapp.com",
    projectId: "secondary-project-44f2a",
    storageBucket: "secondary-project-44f2a.appspot.com",
    messagingSenderId: "721701973965",
    appId: "1:721701973965:web:c190ff98b2e26d20511e84"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };