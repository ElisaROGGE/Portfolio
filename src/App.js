import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO1Eb_migc9uT_W4jwJdv2kwAw2_1m3f8",
  authDomain: "portfolio-7ad52.firebaseapp.com",
  projectId: "portfolio-7ad52",
  storageBucket: "portfolio-7ad52.appspot.com",
  messagingSenderId: "183804055727",
  appId: "1:183804055727:web:f81deb1e4ea6dd8f33045a",
  measurementId: "G-BJRX46SK09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
