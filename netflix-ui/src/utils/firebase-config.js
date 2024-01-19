import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCg4ntMf2YU1wG_1oQdCai8rQWLdD05p-Y",
  authDomain: "react-netflix-clone-66709.firebaseapp.com",
  projectId: "react-netflix-clone-66709",
  storageBucket: "react-netflix-clone-66709.appspot.com",
  messagingSenderId: "808792856961",
  appId: "1:808792856961:web:bbef8108b1608c0887b080",
  measurementId: "G-5JZR7P4KSM",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
