import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA4TUaQ-vEMi0eQZKi0Y4p-Gm0SzcLq6PQ",
    authDomain: "book-app-fbc4b.firebaseapp.com",
    projectId: "book-app-fbc4b",
    storageBucket: "book-app-fbc4b.appspot.com",
    messagingSenderId: "985659543795",
    appId: "1:985659543795:web:77409eae25768e6e78a786"
  };

//   init firebase
initializeApp(firebaseConfig)

// init firestore
const db= getFirestore()

// init firebase auth
const auth=getAuth()

export {db, auth}