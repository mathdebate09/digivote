// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBlS-jq-ZmlAht6B6VBUuvH6t6YFza8GI",
  authDomain: "hackathon-8a225.firebaseapp.com",
  projectId: "hackathon-8a225",
  storageBucket: "hackathon-8a225.appspot.com",
  messagingSenderId: "475224852429",
  appId: "1:475224852429:web:35c1811290239da2942684",
  measurementId: "G-0HS4JF7GEJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
