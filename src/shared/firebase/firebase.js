import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7ABVeUi8XOIg8gCQDJkY7_A39YzNG48k",
  authDomain: "image-community-c8434.firebaseapp.com",
  databaseURL:
    "https://image-community-c8434-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "image-community-c8434",
  storageBucket: "image-community-c8434.appspot.com",
  messagingSenderId: "759981200841",
  appId: "1:759981200841:web:6b73ed9b03ba7f12640418",
  measurementId: "G-V69KVR1W3Q",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
