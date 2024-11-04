// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwYwR9SWOn1uFzMX3Krlg7egdgahLdyH8",
  authDomain: "portfoloi-dfb46.firebaseapp.com",
  projectId: "portfoloi-dfb46",
  storageBucket: "portfoloi-dfb46.appspot.com",
  messagingSenderId: "929884610951",
  appId: "1:929884610951:web:74119a108e3c095ff4f322",
  measurementId: "G-K533PYXXQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
