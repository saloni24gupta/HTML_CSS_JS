
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyATfTDkIICNKAeXXnWXi96G2JtpmrpVMLI",
    authDomain: "fir-app-9c60b.firebaseapp.com",
    projectId: "fir-app-9c60b",
    storageBucket: "fir-app-9c60b.appspot.com",
    messagingSenderId: "399998781831",
    appId: "1:399998781831:web:fc17daa914332ad1126b22",
    measurementId: "G-NZ82HPGEFP"
  };
//init firebase app
// firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)


const db = getFirestore();
const colRef =  collection(db, 'posts')
//strp3 get the collection data
// for that we need to import function to do that getDocs

getDocs(colRef).then((snapshot) => {
let posts = []
snapshot.docs.forEach((doc) => {
    posts.push({...doc.data(), id:doc.id})
})
console.log(posts)
})

export const auth = getAuth(app)



export default auth;




