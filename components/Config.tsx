import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";

///SOLUCIÓN DE WARNING
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO6AACFc0SctS_JOaOdIMz_Yodm9vOVVs",
    authDomain: "duckhunt-10d2c.firebaseapp.com",
    databaseURL: "https://duckhunt-10d2c-default-rtdb.firebaseio.com",
    projectId: "duckhunt-10d2c",
    storageBucket: "duckhunt-10d2c.appspot.com",
    messagingSenderId: "714735361996",
    appId: "1:714735361996:web:a2c619b498549302f8c769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const storage = getStorage(app)