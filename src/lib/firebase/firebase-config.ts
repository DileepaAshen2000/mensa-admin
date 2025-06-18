// lib/firebase/firebase-config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-t81O4bJYxOXnva52ZfJhIZBO7KQn7F8",
    authDomain: "mensa-admin.firebaseapp.com",
    projectId: "mensa-admin",
    storageBucket: "mensa-admin.firebasestorage.app",
    messagingSenderId: "851049381206",
    appId: "1:851049381206:web:d714fac45a2073a6332af7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
