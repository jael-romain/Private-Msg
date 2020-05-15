// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkyhXZX19Gpj69KjLDrA24ZurCh9NDJ60",
    authDomain: "chat-e0c59.firebaseapp.com",
    databaseURL: "https://chat-e0c59.firebaseio.com",
    projectId: "chat-e0c59",
    storageBucket: "chat-e0c59.appspot.com",
    messagingSenderId: "1065778268006",
    appId: "1:1065778268006:web:357a3dd7faf3c5b36aeaa7"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth()
  let firebaseDatabase = firebaseApp.database()

  export{firebaseAuth, firebaseDatabase}

  