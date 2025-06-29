// frontend/src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAX0bdT020DaFan4ei_KtPKbxHouuRxLfs",
  authDomain: "expense-c988c.firebaseapp.com",
  projectId: "expense-c988c",
  storageBucket: "expense-c988c.appspot.com", // ✅ corrected `.app` to `.appspot.com`
  messagingSenderId: "321793489872",
  appId: "1:321793489872:web:fba88cebcc78774c1897d5",
  measurementId: "G-P11DXV8140"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
