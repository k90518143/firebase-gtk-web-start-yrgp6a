// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

// Add Firebase project configuration object here
// var firebaseConfig = {};

// firebase.initializeApp(firebaseConfig);

// FirebaseUI config
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    // Email / Password Provider.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl){
      // Handle sign-in.
      // Return false to avoid redirect.
      return false;
    }
  }
};
var firebaseConfig = {
    apiKey: "AIzaSyDfeg7DptlbemJqNRD2J7UOqhPA368VLd0",
    authDomain: "jack001-895b2.firebaseapp.com",
    databaseURL: "https://jack001-895b2.firebaseio.com",
    projectId: "jack001-895b2",
    storageBucket: "jack001-895b2.appspot.com",
    messagingSenderId: "93648383978",
    appId: "1:93648383978:web:4ed6ab4281b1a893764c93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  startRsvpButton.addEventListener("click",
 () => {
      ui.start("#firebaseui-auth-container", uiConfig);
});
  
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
