import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcOEC4MZthqd859jRfRNSiQrqWN0jX8MA",
  authDomain: "sparta-inspection.firebaseapp.com",
  projectId: "sparta-inspection",
  storageBucket: "sparta-inspection.appspot.com",
  messagingSenderId: "84662675587",
  appId: "1:84662675587:web:f39b141ef6b3ae043053b6",
  measurementId: "G-827EBEQB8N",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();
export const analytics = getAnalytics();
export default app;
