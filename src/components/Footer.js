import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ language }) => {
  const translations = {
    uz: {
      clinic: 'NAVBATCHI AI Stomatologiya Klinikai',
      address: 'Toshkent, Mirzo Ulug\'bek ko\'chasi, 123',
      phone: '+998 (71) 200-00-00',
      hours: 'Dushanbadan Jumaaga: 08:00 - 18:00',
      weekend: 'Shanba-Yakshanba: 09:00 - 14:00',
      copyright: '© 2024 NAVBATCHI AI. Barcha huquqlar saqlangan.',
      contact: 'Biz bilan bog\'laning',
      services: 'Xizmatlar',
      about: 'Haqimizda'
    },
    ru: {
      clinic: 'Стоматологическая клиника NAVBATCHI AI',
      address: 'Ташкент, ул. Мирзо Улугбека, 123',
      phone: '+998 (71) 200-00-00',
      hours: 'Пн-Пт: 08:00 - 18:00',
      weekend: 'Сб-Вс: 09:00 - 14:00',
      copyright: '© 2024 NAVBATCHI AI. Все права защищены.',
      contact: 'Свяжитесь с нами',
      services: 'Услуги',
      about: 'О нас'
    },
    en: {
      clinic: 'NAVBATCHI AI Dental Clinic',
      address: 'Tashkent, Mirzo Ulugbek Street, 123',
      phone: '+998 (71) 200-00-00',
      hours: 'Mon-Fri: 08:00 - 18:00',
      weekend: 'Sat-Sun: 09:00 - 14:00',
      copyright: '© 2024 NAVBATCHI AI. All rights reserved.',
      contact: 'Contact Us',
      services: 'Services',
      about: 'About'
    }
  };

  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section">
            <h3>🦷 {t.clinic}</h3>
            <p>{t.address}</p>
            <div className="footer-contact">
              <div>
                <FaPhone /> {t.phone}
              </div>
              <div>
                <FaClock /> {t.hours}
              </div>
              <div>
                <FaClock /> {t.weekend}
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>{t.services}</h3>
            <ul>
              <li>Tish terapiyasi</li>
              <li>Protezlash</li>
              <li>Ortodontiya</li>
              <li>Implantatsiya</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t.contact}</h3>
            <div className="social-links">
              <a href="#" className="social-link" title="Facebook"><FaFacebook /></a>
              <a href="#" className="social-link" title="Instagram"><FaInstagram /></a>
              <a href="#" className="social-link" title="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
