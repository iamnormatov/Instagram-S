import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'


//import seed file
//import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyC_-LEzgXmxfDHonN856a7JORkh1XVW30U",
    authDomain: "azizizizi.firebaseapp.com",
    projectId: "azizizizi",
    storageBucket: "azizizizi.appspot.com",
    messagingSenderId: "197748440354",
    appId: "1:197748440354:web:1f3988a5ba03025853797b",
    measurementId: "G-FGDDF43JN0"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

//call seed file only once
//seedDatabase(firebase)

export { firebase, FieldValue };