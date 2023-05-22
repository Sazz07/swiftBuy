// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoYhFNnRaXG1sGWm7IT6z0jDdb_gki_NI",
    authDomain: "swiftbuy-b6bec.firebaseapp.com",
    projectId: "swiftbuy-b6bec",
    storageBucket: "swiftbuy-b6bec.appspot.com",
    messagingSenderId: "639864201932",
    appId: "1:639864201932:web:be45d225225d0f611e5869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;