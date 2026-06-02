import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AizSyD2zNCNVpCEH0QoVQe93L9VYXzgLy8T70",
  authDomain: "ck-group-database.firebaseapp.com",
  projectId: "ck-group-database",
  storageBucket: "ck-group-database.appspot.com",
  messagingSenderId: "1077122571593",
  appId: "1:1077122571593:web:c4f36bf17b317edd330e98",
  measurementId: "G-11BR6YE9FF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);