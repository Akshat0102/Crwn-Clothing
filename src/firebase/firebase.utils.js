// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB19n2Q6kgMTXR_cUh06wFqWUHmcAB45nw",
    authDomain: "crwn-db-36e90.firebaseapp.com",
    projectId: "crwn-db-36e90",
    storageBucket: "crwn-db-36e90.appspot.com",
    messagingSenderId: "764047541880",
    appId: "1:764047541880:web:12068d5be50942c65b0f8d",
    measurementId: "G-0YL8WH2CCM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;