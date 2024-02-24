import { initializeApp } from "firebase/app";
const firebaseConfig = {
//   appId:import.meta.env.FIREBASE_appId
apiKey: "AIzaSyDsJyPbpopvjYr0Q2oNORqnzSNZ3gKLP1I",
authDomain: "flowlancher.firebaseapp.com",
projectId: "flowlancher",
storageBucket: "flowlancher.appspot.com",
messagingSenderId: "295289127649",
appId: "1:295289127649:web:3a7504264da6f8f4abeda0"
};

const app = initializeApp(firebaseConfig);
export default app; 