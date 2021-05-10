import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Import seed file here
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyAmldLtqDxF3GfI_GenF2S-mA_Mrvlul3E",
  authDomain: "instagram-react-1.firebaseapp.com",
  projectId: "instagram-react-1",
  storageBucket: "instagram-react-1.appspot.com",
  messagingSenderId: "848104022124",
  appId: "1:848104022124:web:55126b5327328d3433f849",
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

// Call seed file here, only ONCE
// seedDatabase(firebase);
// console.log("firebase", firebase);

export { firebase, FieldValue };
