// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPmylnOliKNIOxnMYGFmPn9KiPeruj0F8",
  authDomain: "laundry-application-1ab2f.firebaseapp.com",
  projectId: "laundry-application-1ab2f",
  storageBucket: "laundry-application-1ab2f.appspot.com",
  messagingSenderId: "271912999096",
  appId: "1:271912999096:web:154891eaf51434d562fc4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
