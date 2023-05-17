import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDiQbuqNYjl2FZC4_vbcUd4K5cYpHaYpo",
  authDomain: "letzchat-74989.firebaseapp.com",
  projectId: "letzchat-74989",
  storageBucket: "letzchat-74989.appspot.com",
  messagingSenderId: "290949285951",
  appId: "1:290949285951:web:72d484fbf76b9dad7c908a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
