// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8tuAEwwGf61S_vN7GdAQMThiFjSNCAok",
  authDomain: "cloneapp-27f00.firebaseapp.com",
  projectId: "cloneapp-27f00",
  storageBucket: "cloneapp-27f00.appspot.com",
  messagingSenderId: "58492850799",
  appId: "1:58492850799:web:1c24779c59b8701595b39a"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
