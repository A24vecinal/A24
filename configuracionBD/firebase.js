// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMo_OOGvYs2yQX4mvA3NOSHB2IjSwHtnY",
    authDomain: "base-de-datos-a24.firebaseapp.com",
    projectId: "base-de-datos-a24",
    storageBucket: "base-de-datos-a24.appspot.com",
    messagingSenderId: "550537347572",
    appId: "1:550537347572:web:23536772a68437b99779a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

/* console.log(app); */
