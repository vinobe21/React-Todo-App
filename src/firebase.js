import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyALCS9UgWdv4hRQ8-tCXmIrA9E4fLlbDBA",
    authDomain: "todo-app-5519e.firebaseapp.com",
    projectId: "todo-app-5519e",
    storageBucket: "todo-app-5519e.appspot.com",
    messagingSenderId: "740462130461",
    appId: "1:740462130461:web:e8a0154c3decae8e7a9df4",
    measurementId: "G-9SHKB4QLSS"
});

const db = firebaseApp.firestore();

export default db;