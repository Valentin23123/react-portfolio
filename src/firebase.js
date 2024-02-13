// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaeuafroR5aiHrYpTzuGpHqeuoQbByfbY",
  authDomain: "cv-react-7783d.firebaseapp.com",
  databaseURL: "https://cv-react-7783d-default-rtdb.firebaseio.com",
  projectId: "cv-react-7783d",
  storageBucket: "cv-react-7783d.appspot.com",
  messagingSenderId: "492658973767",
  appId: "1:492658973767:web:e3ebe25018bd8f6e746562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

const storage = getStorage(app);
export { storage };



const firestore = getFirestore(app);
export { firestore };