import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBG8pWwCCHf-wpDNjTgVyFHmzoNNzcSf78",
  authDomain: "tarefasplus-47dcb.firebaseapp.com",
  projectId: "tarefasplus-47dcb",
  storageBucket: "tarefasplus-47dcb.appspot.com",
  messagingSenderId: "1089445525762",
  appId: "1:1089445525762:web:0ac571f437230b0ba96a1b"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
