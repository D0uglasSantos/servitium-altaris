import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpIHKFEb6y_qCbWfmzZA-yryp8VpTIyWY",
  authDomain: "adm-servidores-altar.firebaseapp.com",
  projectId: "adm-servidores-altar",
  storageBucket: "adm-servidores-altar.firebasestorage.app",
  messagingSenderId: "558059882908",
  appId: "1:558059882908:web:5b57a308e6a990a06b2059",
  measurementId: "G-VH40JCFB7B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
