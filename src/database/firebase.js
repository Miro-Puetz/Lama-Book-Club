import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_DB_API,
  authDomain: "book-club-339414.firebaseapp.com",
  databaseURL:
    "https://book-club-339414-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "book-club-339414",
  storageBucket: "book-club-339414.appspot.com",
  messagingSenderId: "251487526560",
  appId: "1:251487526560:web:0f409b101ce1af9de1f3c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
