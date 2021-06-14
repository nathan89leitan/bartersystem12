import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBz6mYw4r4MQZXdi1iM6P1Tx8GdikTsxGM",
    authDomain: "bartersystem-1dd57.firebaseapp.com",
    projectId: "bartersystem-1dd57",
    storageBucket: "bartersystem-1dd57.appspot.com",
    messagingSenderId: "1040641304051",
    appId: "1:1040641304051:web:8b56d2ce44d6e9bb36de86",
    measurementId: "G-DWJM1CXBNY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//export default firebase.firestore()