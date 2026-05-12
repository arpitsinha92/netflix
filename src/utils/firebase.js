// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKpSZVG3sPcvpHIKdATRjthXnlv1m3cdA",
  authDomain: "netflix-57ef9.firebaseapp.com",
  projectId: "netflix-57ef9",
  storageBucket: "netflix-57ef9.firebasestorage.app",
  messagingSenderId: "57462542092",
  appId: "1:57462542092:web:a39d99e93009d1c2f20329",
  measurementId: "G-N5RNG313EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);