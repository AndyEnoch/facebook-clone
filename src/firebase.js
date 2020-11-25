import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVVA0eTCSBqOGQbNJ6sa-d0hSaYSYFBxw",
    authDomain: "facebook-clone-3ef57.firebaseapp.com",
    databaseURL: "https://facebook-clone-3ef57.firebaseio.com",
    projectId: "facebook-clone-3ef57",
    storageBucket: "facebook-clone-3ef57.appspot.com",
    messagingSenderId: "1004256803340",
    appId: "1:1004256803340:web:99706c5f8f8e98d54ecc29",
    measurementId: "G-DZBZ47JNJL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;