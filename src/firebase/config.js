import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK0Fu96FByst74RTU84-ItSNtRX5uxjKE",
  authDomain: "udemy-vue-live-chat-a0236.firebaseapp.com",
  projectId: "udemy-vue-live-chat-a0236",
  storageBucket: "udemy-vue-live-chat-a0236.appspot.com",
  messagingSenderId: "428450202311",
  appId: "1:428450202311:web:f5f0cd604d4c37750334e2"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };