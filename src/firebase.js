//import {firebase} from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCujhQe3J3c8H67j3Kdg2ujI_wTuRkvz50",
    authDomain: "socialapp-4d568.firebaseapp.com",
    projectId: "socialapp-4d568",
    storageBucket: "socialapp-4d568.appspot.com",
    messagingSenderId: "264111728162",
    appId: "1:264111728162:web:6d296b4badfaba7a728c7b"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db
