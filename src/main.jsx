import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '/src/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjJU5qxnPN9n5gNvWrSRI4lzXTM4VQxUA",
  authDomain: "showdestanduphoy-8d8eb.firebaseapp.com",
  projectId: "showdestanduphoy-8d8eb",
  storageBucket: "showdestanduphoy-8d8eb.appspot.com",
  messagingSenderId: "112327030758",
  appId: "1:112327030758:web:ef1c7c3590e164e5410827",
  measurementId: "G-9GD86JL63N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
