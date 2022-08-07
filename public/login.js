import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABREyVE90esQItbRD5_8v-E1CvgkY7Iak",
  authDomain: "dashmeet-1b074.firebaseapp.com",
  projectId: "dashmeet-1b074",
  storageBucket: "dashmeet-1b074.appspot.com",
  messagingSenderId: "721119820782",
  appId: "1:721119820782:web:88a6523afe698c35b6ecff",
  measurementId: "G-5VM145F81E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
var email = document.getElementById("email_input").value;
var password = document.getElementById("input_password").value;
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    var db = firebase.firestore();
      db.collection("Users").doc(firebase.auth().currentUser.uid).set({
      Email : email
    }).then(function() {
      alert("Document successfully written!");
    }).catch(function(error){  // for when document is not correctly wrote
     alert("Got an error",error);
      });// end of the firestore data
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

//function that handles the subscribe process
function subscribeFirebase(){
console.log(email + password);
