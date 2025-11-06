
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add your web app's Firebase configuration
// For more information on how to get this configuration, check out the documentation:
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDhGesSAd8LE4wQ-s4l3DEupr4a9DwZW9o",
  authDomain: "react-n-292e8.firebaseapp.com",
  projectId: "react-n-292e8",
  storageBucket: "react-n-292e8.appspot.com",
  messagingSenderId: "22195493301",
  appId: "1:22195493301:web:51932eb75eecb0d879e1fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, "master");
