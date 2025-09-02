// Client/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSuU2Fkb99Qe07PR0xlRw-muCMIsn7_W4",
  authDomain: "basic-chat-b6e55.firebaseapp.com",
  projectId: "basic-chat-b6e55",
  storageBucket: "basic-chat-b6e55.firebasestorage.app",
  messagingSenderId: "878854350398",
  appId: "1:878854350398:web:ee1e4bd80eed56ca00d36f",
  measurementId: "G-3ZYTB67QX6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
