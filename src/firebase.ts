import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import {getFunctions} from "firebase/functions"

const firebaseConfig = {
  apiKey: "AIzaSyB__3-_PyxJrG2DGoBLVcQ4Zi1OKi8Ny6g",
  authDomain: "saas-translator-app-dbd06.firebaseapp.com",
  projectId: "saas-translator-app-dbd06",
  storageBucket: "saas-translator-app-dbd06.appspot.com",
  messagingSenderId: "355940351222",
  appId: "1:355940351222:web:7a3baf442266f6f9a9c0d7"
};

const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export {auth, db, functions} ;