import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIa38cyGGKdQA5jOXA-NUL5Tm-_jaDsp4",
  authDomain: "proyecto-firebase-cf192.firebaseapp.com",
  projectId: "proyecto-firebase-cf192",
  storageBucket: "proyecto-firebase-cf192.appspot.com",
  messagingSenderId: "1051898919951",
  appId: "1:1051898919951:web:ebea4a0ee17987905df77a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

