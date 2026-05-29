import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaGlobe } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const translations = {
    uz: {
      home: 'Bosh sahifa',
      appointment: 'Navbat olish',
      doctors: 'Shifokorlar',
      about: 'Haqimizda',
      admin: 'Admin',
      clinic: 'NAVBATCHI AI',
      phone: '+998 (71) 200-00-00'
    },
    ru: {
      home: 'Главная',
      appointment: 'Запись на приём',
      doctors: 'Врачи',
      about: 'О нас',
      admin: 'Админ',
      clinic: 'NAVBATCHI AI',
      phone: '+998 (71) 200-00-00'
    },
    en: {
      home: 'Home',
      appointment: 'Book Appointment',
      doctors: 'Doctors',
      about: 'About Us',
      admin: 'Admin',
      clinic: 'NAVBATCHI AI',
      phone: '+998 (71) 200-00-00'
    }
  };

  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🦷</span>
          {t.clinic}
        </Link>

        <div className="nav-menu" style={{ display: isOpen ? 'flex' : 'none' }}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            {t.home}
          </Link>
          <Link to="/appointment" className="nav-link" onClick={() => setIsOpen(false)}>
            {t.appointment}
          </Link>
          <Link to="/doctors" className="nav-link" onClick={() => setIsOpen(false)}>
            {t.doctors}
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            {t.about}
          </Link>
          <Link to="/admin" className="nav-link" onClick={() => setIsOpen(false)}>
            {t.admin}
          </Link>
        </div>

        <div className="nav-right">
          <div className="language-selector">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              <option value="uz">🇺🇿 UZ</option>
              <option value="ru">🇷🇺 РУ</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </div>

          <a href="tel:+998712000000" className="phone-button">
            <FaPhone /> {t.phone}
          </a>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
