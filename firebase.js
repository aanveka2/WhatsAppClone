import firebase from "firebase";



  const firebaseConfig = {
    apiKey: "AIzaSyAOWut4Gc63BQuwYAUJC4vqxiHzRRx7mWs",
    authDomain: "whatsapp-clone-d61f1.firebaseapp.com",
    projectId: "whatsapp-clone-d61f1",
    storageBucket: "whatsapp-clone-d61f1.appspot.com",
    messagingSenderId: "27934088982",
    appId: "1:27934088982:web:575d9d87d1b42c739cba37"
  };
 
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth, provider};