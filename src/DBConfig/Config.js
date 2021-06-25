import firebase from "firebase";

var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "webmobilehybridapp.firebaseapp.com",
    databaseURL: "https://webmobilehybridapp.firebaseio.com",
    projectId: "webmobilehybridapp",
    storageBucket: "webmobilehybridapp.appspot.com",
    messagingSenderId: "1065788689805",
    appId: "1:1065788689805:web:beb352a7c7149321b801c4",
    measurementId: "G-RS5D3BHHJ4"
};
// Initialize Firebase
const config = firebase.initializeApp(firebaseConfig);

export default config;