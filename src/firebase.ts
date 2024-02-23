// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOVHZnA92ge0sZZHz-K7Q2CnUwYEdZ8lw",
  authDomain: "global-doodad-403318.firebaseapp.com",
  projectId: "global-doodad-403318",
  storageBucket: "global-doodad-403318.appspot.com",
  messagingSenderId: "748726386980",
  appId: "1:748726386980:web:e76437ade7ff1b4537f3b1",
  measurementId: "G-VXQ834SL1B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
