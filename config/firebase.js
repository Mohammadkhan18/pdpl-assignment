import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCiz3hKwx7CfhvtXoB4MlX9ZQ67kQfaOeI",
  authDomain: "next-authjs-4f6b2.firebaseapp.com",
  projectId: "next-authjs-4f6b2",
  storageBucket: "next-authjs-4f6b2.appspot.com",
  messagingSenderId: "819453795744",
  appId: "1:819453795744:web:e3aaa97ee78af48ac758c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();