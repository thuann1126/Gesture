import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDObz0MaNJOCt5Z51vAqjf8sXit33Dfy1Y",
    authDomain: "auth-gesture-development.firebaseapp.com",
    databaseURL: "https://auth-gesture-development-default-rtdb.firebaseio.com",
    projectId: "auth-gesture-development",
    storageBucket: "auth-gesture-development.appspot.com",
    messagingSenderId: "658132862661",
    appId: "1:658132862661:web:fe3808be56377e9cca12ac"
});

export const auth = app.auth();
export const db = firebase.firestore();
export default app;


