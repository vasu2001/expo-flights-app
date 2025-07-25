// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhAMauRwp4zTNDVHxS0PYMi1z7RLiklA",
  authDomain: "expo-flights-app.firebaseapp.com",
  projectId: "expo-flights-app",
  storageBucket: "expo-flights-app.firebasestorage.app",
  messagingSenderId: "875557876630",
  appId: "1:875557876630:web:edc755eb282242b6fbe3b7",
  measurementId: "G-42JRGT4TX6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
