// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const ENV = import.meta.env;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ENV.VITE_apiKey,
  authDomain: ENV.VITE_authDomain,
  projectId: ENV.VITE_projectId,
  storageBucket: ENV.VITE_storageBucket,
  messagingSenderId: ENV.VITE_messagingSenderId,
  appId: ENV.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
