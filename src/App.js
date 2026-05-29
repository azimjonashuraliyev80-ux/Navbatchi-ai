import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Doctors from './pages/Doctors';
import About from './pages/About';
import AdminPanel from './pages/AdminPanel';
import './App.css';

function App() {
  const [language, setLanguage] = useState('uz');

  return (
    <Router>
      <div className="App">
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/appointment" element={<Appointment language={language} />} />
          <Route path="/doctors" element={<Doctors language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/admin" element={<AdminPanel language={language} />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
