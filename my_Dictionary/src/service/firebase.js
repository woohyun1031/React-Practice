// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY0zVvQUxG6TqQOdzij2gblOVg4pwXG5c",
  authDomain: "sparta-react-basic-7a47c.firebaseapp.com",
  projectId: "sparta-react-basic-7a47c",
  storageBucket: "sparta-react-basic-7a47c.appspot.com",
  messagingSenderId: "986269629734",
  appId: "1:986269629734:web:e6743172c57f8d02f595e7",
  measurementId: "G-7WEVXE6NFG"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();

export default db;