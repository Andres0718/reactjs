import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCViQSNAsRcGPPHEumX2JhZGf-evfxgCFo",
  authDomain: "tiendapple-e8922.firebaseapp.com",
  projectId: "tiendapple-e8922",
  storageBucket: "tiendapple-e8922.appspot.com",
  messagingSenderId: "542213603262",
  appId: "1:542213603262:web:ce70aa26131d72c0e143ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);