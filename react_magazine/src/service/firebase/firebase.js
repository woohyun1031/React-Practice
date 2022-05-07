import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.React_App_API_KEY,
  authDomain: process.env.React_App_AUTH_DOMAIN,
  databaseURL: process.env.React_App_DATABASE_URL,
  projectId: process.env.React_App_PROJECT_ID,
  storageBucket: process.env.React_App_STORAGE_BUCKET,
  messagingSenderId: process.env.React_App_MESSAGING_SENDER_ID,
  appId: process.env.React_App_APP_ID,
  measurementId: process.env.React_App_MEASURE_MENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
