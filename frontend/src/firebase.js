// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "realstate-web-app-fcd9a.firebaseapp.com",
  projectId: "realstate-web-app-fcd9a",
  storageBucket: "realstate-web-app-fcd9a.appspot.com",
  messagingSenderId: "455389344459",
  appId: "1:455389344459:web:38e6bb569dec94899e614e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

