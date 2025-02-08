import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjo5oTUTq_MkJ4V0Kyrpu3MY44atGU364",
  authDomain: "linkedin-clone-5d682.firebaseapp.com",
  projectId: "linkedin-clone-5d682",
  storageBucket: "linkedin-clone-5d682.firebasestorage.app",
  messagingSenderId: "776149274545",
  appId: "1:776149274545:web:4b2f7b3896beb5fc3b7790",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
