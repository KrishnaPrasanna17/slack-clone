import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRFmLDTl6PzOpJ1HQNrGQ67AAsHQOgrbU",
    authDomain: "slack-clone-711a0.firebaseapp.com",
    projectId: "slack-clone-711a0",
    storageBucket: "slack-clone-711a0.appspot.com",
    messagingSenderId: "1050946408058",
    appId: "1:1050946408058:web:57bcec16195f431a2ef5c3",
    measurementId: "G-NHSZF3LTRC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;

  