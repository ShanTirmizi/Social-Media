import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCgo-fyT8E-WXVIgOC_M-cpEHu0EqAO8rw",
    authDomain: "social-media-e7a77.firebaseapp.com",
    projectId: "social-media-e7a77",
    storageBucket: "social-media-e7a77.appspot.com",
    messagingSenderId: "914740796266",
    appId: "1:914740796266:web:78b21bf7c19573edf8a313",
    measurementId: "G-R3E8VRQQ7S"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage }

