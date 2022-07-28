import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAfSWfgRsHk6jX23uefpfjej_pfzF3WvKQ",
  authDomain: "mymoney-24680.firebaseapp.com",
  projectId: "mymoney-24680",
  storageBucket: "mymoney-24680.appspot.com",
  messagingSenderId: "748609802355",
  appId: "1:748609802355:web:523bec8fc39d52a1f91a06"
};


//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth}

//wrap up: 
//1. import what we need
//2. add config information
//3. initialize app
//4. initialize service
//5. export services to be used in other components