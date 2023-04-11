import firebase from 'firebase/app';
import 'firebase/firestore';   // for cloud firestore
const firebaseConfig = {
    apiKey: "AIzaSyD5kcdxhcxF08XTjSNSFoZnz633O4rMT0w",
    authDomain: "janakhanji-portfolio.firebaseapp.com",
    projectId: "janakhanji-portfolio",
    storageBucket: "janakhanji-portfolio.appspot.com",
    messagingSenderId: "639241714255",
    appId: "1:639241714255:web:6902d020864d0bab3fc83a"
  };

firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();
