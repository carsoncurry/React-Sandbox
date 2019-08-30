import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAnb0Cp42-5O0xwpmsvgxsOphdhAwuRkfk",
    authDomain: "net-ninja-marioplan-5c619.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-5c619.firebaseio.com",
    projectId: "net-ninja-marioplan-5c619",
    storageBucket: "",
    messagingSenderId: "748784272494",
    appId: "1:748784272494:web:568ff58f97250a3c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
