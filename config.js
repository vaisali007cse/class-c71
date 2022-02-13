import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCwt-YwfU8iHcD2LPlJJUQkU6EdIlIP4R4",
    authDomain: "willy-app-63558.firebaseapp.com",
    projectId: "willy-app-63558",
    storageBucket: "willy-app-63558.appspot.com",
    messagingSenderId: "267076205252",
    appId: "1:267076205252:web:79502f91c6d040042f2791"
  };
  
 if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
 }
 
  export default firebase.firestore();