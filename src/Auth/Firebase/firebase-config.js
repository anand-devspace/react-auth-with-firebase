// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkXcgP1pRMHL2Goq1MIfmSfK_Ktgvsb40",
  authDomain: "react-auth-643a6.firebaseapp.com",
  projectId: "react-auth-643a6",
  storageBucket: "react-auth-643a6.appspot.com",
  messagingSenderId: "454415499653",
  appId: "1:454415499653:web:06c723d866be6cbe9604ec",
  measurementId: "G-KS9RH32BCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);