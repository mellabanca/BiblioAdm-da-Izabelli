// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
require("@firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoCT9reli8WDfp69DA5Mkhkk1Q_NumqsU",
  authDomain: "biblioadm-izabelli.firebaseapp.com",
  projectId: "biblioadm-izabelli",
  storageBucket: "biblioadm-izabelli.appspot.com",
  messagingSenderId: "582773784820",
  appId: "1:582773784820:web:9d522810db8144b85b5ea1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();