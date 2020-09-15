import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBVgpt5EU4xUnNDy7TNisQMTyFioWb-KJE",
  authDomain: "todolist-f8010.firebaseapp.com",
  databaseURL: "https://todolist-f8010.firebaseio.com",
  projectId: "todolist-f8010",
  storageBucket: "todolist-f8010.appspot.com",
  messagingSenderId: "789264198661",
  appId: "1:789264198661:web:ddb91319eafd2d3cd4806c",
});

export { firebaseConfig as firebase };
