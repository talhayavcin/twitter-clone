import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC1rmZ3kTD0C5LJfBRqHndZwm2gHFf1lzA",
  authDomain: "twitter-clone-1528b.firebaseapp.com",
  projectId: "twitter-clone-1528b",
  storageBucket: "twitter-clone-1528b.appspot.com",
  messagingSenderId: "615034604497",
  appId: "1:615034604497:web:0bd4c62592cc960b85aef0",
  measurementId: "G-ET0KN2N2LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;