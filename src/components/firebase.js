import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDEykPHD5vDLoj5RoWdkEASTWlBZQ372k8",
  authDomain: "signin-7b28d.firebaseapp.com",
  projectId: "signin-7b28d",
  storageBucket: "signin-7b28d.appspot.com",
  messagingSenderId: "619705108995",
  appId: "1:619705108995:web:3b4d3851092c0f69ecdc36",
  measurementId: "G-6G1D8JNEKY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}