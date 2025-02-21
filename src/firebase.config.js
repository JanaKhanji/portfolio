import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5kcdxhcxF08XTjSNSFoZnz633O4rMT0w",
  authDomain: "janakhanji-portfolio.firebaseapp.com",
  projectId: "janakhanji-portfolio",
  storageBucket: "janakhanji-portfolio.appspot.com",
  messagingSenderId: "639241714255",
  appId: "1:639241714255:web:6902d020864d0bab3fc83a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
