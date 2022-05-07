// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.React_App_API_KEY,
  authDomain: process.env.React_App_AUTH_DOMAIN,
  projectId: process.env.React_App_PROJECT_ID,
  storageBucket: process.env.React_App_STORAGE_BUCKET,
  messagingSenderId: process.env.React_App_MESSAGING_SENDER_ID,
  appId: process.env.React_App_APP_ID,
  measurementId: process.env.React_App_MEASURE_MENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();

export default db;
