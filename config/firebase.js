// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_nPBMN9Xc5wq2NRm-R7BYR7r4rN2_Q7U",
  authDomain: "netflixgpt-service.firebaseapp.com",
  projectId: "netflixgpt-service",
  storageBucket: "netflixgpt-service.appspot.com",
  messagingSenderId: "794068252931",
  appId: "1:794068252931:web:075a74def1696fc35f9136",
  measurementId: "G-HV3NPNBQ4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);