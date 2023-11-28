// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey:import.meta.env.FIREBASE_apiKey,
//   authDomain:import.meta.env.FIREBASE_authDomain,
//   projectId:import.meta.env.FIREBASE_projectId,
//   storageBucket:import.meta.env.FIREBASE_storageBucket,
//   messagingSenderId:import.meta.env.FIREBASE_messagingSenderId,
//   appId:import.meta.env.FIREBASE_appId
apiKey: "AIzaSyDsJyPbpopvjYr0Q2oNORqnzSNZ3gKLP1I",
authDomain: "flowlancher.firebaseapp.com",
projectId: "flowlancher",
storageBucket: "flowlancher.appspot.com",
messagingSenderId: "295289127649",
appId: "1:295289127649:web:3a7504264da6f8f4abeda0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 