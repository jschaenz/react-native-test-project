// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDw396ZyJNEyshl_43-1UE9grpO-StTRXg",
    authDomain: "native-test-f0d4b.firebaseapp.com",
    projectId: "native-test-f0d4b",
    storageBucket: "native-test-f0d4b.appspot.com",
    messagingSenderId: "942573148816",
    appId: "1:942573148816:web:193d14bc209c0186625615",
    measurementId: "G-1Q1KKDKTZL"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()