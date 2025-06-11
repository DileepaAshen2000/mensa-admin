// lib/firebase/firebase-config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpAmPGgRt3gtjTAHOldZKdj-_iAd6IQag",
    authDomain: "mensa-foods.firebaseapp.com",
    // databaseURL: "https://mensa-foods-default-rtdb.firebaseio.com",
    projectId: "mensa-foods",
    storageBucket: "mensa-foods.firebasestorage.app",
    messagingSenderId: "397172133190",
    appId: "1:397172133190:web:e8df9ff4c89de623e8a947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
