// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHX5VfKiePTPowsPxUzbQ_x7WqG2kLoBg",
  authDomain: "dragon-news-portal-748f2.firebaseapp.com",
  projectId: "dragon-news-portal-748f2",
  storageBucket: "dragon-news-portal-748f2.firebasestorage.app",
  messagingSenderId: "400064028501",
  appId: "1:400064028501:web:4b82463a8376c91dd499dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;