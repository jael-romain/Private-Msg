// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "key",
    authDomain: "domain",
    databaseURL: "url",
    projectId: "id",
    storageBucket: "bucket",
    messagingSenderId: "sender_id",
    appId: "id"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  let firebaseAuth = firebaseApp.auth()
  let firebaseDatabase = firebaseApp.database()

  export{firebaseAuth, firebaseDatabase}

  
