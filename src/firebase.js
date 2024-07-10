import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAESJ9sHGSdgLhHOpfnYiab2Kr4VO9nyM",
  authDomain: "atmobilefirst-889da.firebaseapp.com",
  projectId: "atmobilefirst-889da",
  storageBucket: "atmobilefirst-889da.appspot.com",
  messagingSenderId: "11761245235",
  appId: "1:11761245235:web:b06f9d2a11ed674ac85746",
  measurementId: "G-3K2XN85YEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
