import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBno1O1G9ZzVX08z8LOXZT47MhDwk-hq5k",
  authDomain: "halimun-salak.firebaseapp.com",
  projectId: "halimun-salak",
  storageBucket: "halimun-salak.firebasestorage.app",
  messagingSenderId: "689351235702",
  appId: "1:689351235702:web:eaf75336f78692d8f5e757",
  measurementId: "G-160JYRJMHE",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
