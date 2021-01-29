import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZwRMeh-SMz2DmsItYm4CqEr2RpNwRJWA",
  authDomain: "signal-clone-9fa63.firebaseapp.com",
  projectId: "signal-clone-9fa63",
  storageBucket: "signal-clone-9fa63.appspot.com",
  messagingSenderId: "665006413093",
  appId: "1:665006413093:web:ac7c94307489c977f236cc"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
