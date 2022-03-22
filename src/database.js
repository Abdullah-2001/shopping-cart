import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhhFlwr6e4RPxLUQD_t2KeZGOuVSOgjIU",
  authDomain: "shopping-cart-b07c9.firebaseapp.com",
  projectId: "shopping-cart-b07c9",
  storageBucket: "shopping-cart-b07c9.appspot.com",
  messagingSenderId: "309001429254",
  appId: "1:309001429254:web:29b87a223e118eac303e87"
};

export const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore();