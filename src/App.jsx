import { useState } from 'react'
import './App.css'
import LandingPage from './page/landingPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import AboutPage from './page/aboutPage';
import LandingIntro from './components/LandingIntro';


function App() {
  const [introDone, setIntroDone] = useState(false);
  return (
    <Router>
      {/* Animasi Intro */}
       {!introDone && <LandingIntro onFinish={() => setIntroDone(true)} />}

      {/* Navbar muncul hanya setelah intro selesai */}
      {introDone && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/about_page" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App
