import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWP-R3xOytW0Z9d1_244zGK7rtrM0dfms",
  authDomain: "cmr-hackathon.firebaseapp.com",
  projectId: "cmr-hackathon",
  storageBucket: "cmr-hackathon.appspot.com",
  messagingSenderId: "1061460483194",
  appId: "1:1061460483194:web:2a1cdcacf4f04729626fc3",
  measurementId: "G-4Y0W94BE6V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
