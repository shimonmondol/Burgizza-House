// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe8fxI24W7RkX_oR25STx3A4OoytyBpTA",
  authDomain: "burgizza-house.firebaseapp.com",
  projectId: "burgizza-house",
  storageBucket: "burgizza-house.firebasestorage.app",
  messagingSenderId: "737493989440",
  appId: "1:737493989440:web:f2fc0cc5298a4f722607a5",
  measurementId: "G-Y6TQF2M32P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
