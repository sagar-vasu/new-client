import * as firebase from "firebase";
import * as Facebook from "expo-facebook";

var firebaseConfig = {
  apiKey: "AIzaSyDwtshdGI-eWwHLENzUfMQTWwgrlBx_i6g",
  authDomain: "codestaff-people.firebaseapp.com",
  databaseURL: "https://codestaff-people.firebaseio.com",
  projectId: "codestaff-people",
  storageBucket: "codestaff-people.appspot.com",
  messagingSenderId: "255685843530",
  appId: "1:255685843530:web:0ad2bf23be502ffedb24b3",
  measurementId: "G-9Y77TZJH3Z",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
require("firebase/firestore");
require("firebase/database");

//Initialize Facebook
Facebook.initializeAsync("2834846270123290");
var database = firebase.database().ref("/");

export { firebase, Facebook };
