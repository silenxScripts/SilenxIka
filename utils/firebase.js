import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlhrG2l0ncLSqGw6atCTtPfvl1Q5OoXZ8",
  authDomain: "silenxika-3736f.firebaseapp.com",
  projectId: "silenxika-3736f",
  storageBucket: "silenxika-3736f.appspot.com",
  messagingSenderId: "744584788020",
  appId: "1:744584788020:web:b3a4b9b1395497d4b53261"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)