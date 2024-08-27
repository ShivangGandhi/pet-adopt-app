// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "react-native-app-c32b9.firebaseapp.com",
    projectId: "react-native-app-c32b9",
    storageBucket: "react-native-app-c32b9.appspot.com",
    messagingSenderId: "922794302723",
    appId: "1:922794302723:web:c97885d4be251e6bf5dd36",
    measurementId: "G-YL7ZY1BDMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const storage = getStorage()

// const analytics = getAnalytics(app);