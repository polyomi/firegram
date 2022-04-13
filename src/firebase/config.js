import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE31v-ku1YgAu61IrKtJDiFjOmvm7FeBg",
  authDomain: "firegram-project-a78a3.firebaseapp.com",
  projectId: "firegram-project-a78a3",
  storageBucket: "firegram-project-a78a3.appspot.com",
  messagingSenderId: "130514101878",
  appId: "1:130514101878:web:ef50f98ceffb1bbecb6157",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
