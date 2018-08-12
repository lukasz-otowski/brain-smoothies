import firebase from 'firebase'  
import firestore from 'firebase/firestore'  

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoszDLupVe57zc4rsgnbhJbKXTgI6NGKo",
    authDomain: "brain-smoothies.firebaseapp.com",
    databaseURL: "https://brain-smoothies.firebaseio.com",
    projectId: "brain-smoothies",
    storageBucket: "brain-smoothies.appspot.com",
    messagingSenderId: "969328114456"
  };
const firebaseApp = firebase.initializeApp(config);

//this function gets rid of errors related to newer versions
firebaseApp.firestore().settings({timestampsInSnapshots:true})

//export firestore database
export default firebaseApp.firestore()