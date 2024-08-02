import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCC3GLX1oc6mDe6yUgaB-CWQtDgR1i7nkU',
  authDomain: 'autodev-b1bba.firebaseapp.com',
  projectId: 'autodev-b1bba',
  storageBucket: 'autodev-b1bba.appspot.com',
  messagingSenderId: '446941303965',
  appId: '1:446941303965:web:3cc9f438c7bb78fe00f074',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
