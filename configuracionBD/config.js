const firebaseConfig = {
  apiKey: "AIzaSyDMo_OOGvYs2yQX4mvA3NOSHB2IjSwHtnY",
  authDomain: "base-de-datos-a24.firebaseapp.com",
  projectId: "base-de-datos-a24",
  storageBucket: "base-de-datos-a24.appspot.com",
  messagingSenderId: "550537347572",
  appId: "1:550537347572:web:23536772a68437b99779a1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();
