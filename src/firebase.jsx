
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAtrlUCeKLQt8mngbwiFle2AV95URkKmko",
  authDomain: "madwears-ca754.firebaseapp.com",
  projectId: "madwears-ca754",
  storageBucket: "madwears-ca754.firebasestorage.app",
  messagingSenderId: "438398747918",
  appId: "1:438398747918:web:6adc60d10ce1ddf8b6035f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)