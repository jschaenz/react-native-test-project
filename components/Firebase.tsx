// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA6Hom4irKFHPE7Ik5GXFcRXVauoSu8wWI",
    authDomain: "react-native-exercise-3c498.firebaseapp.com",
    projectId: "react-native-exercise-3c498",
    storageBucket: "react-native-exercise-3c498.appspot.com",
    messagingSenderId: "307920213372",
    appId: "1:307920213372:web:e21f3729610a45818a00f9"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()