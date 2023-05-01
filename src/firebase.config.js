// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZwUm6Us6LE1H2TUVwxp_SJlUgCzaN1S0",
  authDomain: "chef-hunter-client.firebaseapp.com",
  projectId: "chef-hunter-client",
  storageBucket: "chef-hunter-client.appspot.com",
  messagingSenderId: "898452189787",
  appId: "1:898452189787:web:9cbae5c5e7c4564860c57e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app