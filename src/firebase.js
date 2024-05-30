import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZTKN0jx4fj7vUdENh2fgaEYv_Q7yMPJQ",
  authDomain: "desafio-insight.firebaseapp.com",
  projectId: "desafio-insight",
  storageBucket: "desafio-insight.appspot.com",
  messagingSenderId: "167118874896",
  appId: "1:167118874896:web:cd6fd23ac121cd53539d95",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
