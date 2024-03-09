import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAzZaFLN_BP2JwsW-5txdfXBvt6UjKPfw",
  authDomain: "johirmisszio.firebaseapp.com",
  projectId: "johirmisszio",
  storageBucket: "johirmisszio.appspot.com",
  messagingSenderId: "961463867363",
  appId: "1:961463867363:web:4cf31228b3fc629147b2d6"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };