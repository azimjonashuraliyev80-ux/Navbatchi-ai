import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUsers, FaHeartbeat, FaClock } from 'react-icons/fa';
import './Home.css';

const Home = ({ language }) => {
  const translations = {
    uz: {
      welcome: 'NAVBATCHI AI-ga xush kelibsiz',
      subtitle: 'Stomatologiya xizmatlariga oson navbat olish',
      booking: 'Navbat olish',
      services: 'Bizning xizmatlar',
      therapy: 'Tish terapiyasi',
      prosthetics: 'Protezlash',
      orthodontics: 'Ortodontiya',
      implants: 'Implantatsiya',
      whyUs: 'Nima uchun biz?',
      feature1: 'Oson Navbat',
      feature1Desc: 'Faqat bir kalit bosishda navbatni olish',
      feature2: 'Tajribali Shifokorlar',
      feature2Desc: '15+ yillik tajribali professional shifokorlar',
      feature3: 'Zamonaviy Texnologiya',
      feature3Desc: 'Eng yangi stomatologik asboblar va texnologiyalar',
      feature4: '24/7 Yordam',
      feature4Desc: 'Har doim sizga yordam berish uchun tayyor'
    },
    ru: {
      welcome: 'Добро пожаловать в NAVBATCHI AI',
      subtitle: 'Простая запись на стоматологические услуги',
      booking: 'Записаться',
      services: 'Наши услуги',
      therapy: 'Терапия',
      prosthetics: 'Протезирование',
      orthodontics: 'Ортодонтия',
      implants: 'Имплантация',
      whyUs: 'Почему мы?',
      feature1: 'Простая запись',
      feature1Desc: 'Запишитесь одним щелчком мыши',
      feature2: 'Опытные врачи',
      feature2Desc: 'Профессионалы с опытом более 15 лет',
      feature3: 'Современные технологии',
      feature3Desc: 'Новейшее оборудование и технологии',
      feature4: 'Помощь 24/7',
      feature4Desc: 'Всегда готовы вам помочь'
    },
    en: {
      welcome: 'Welcome to NAVBATCHI AI',
      subtitle: 'Easy appointment booking for dental services',
      booking: 'Book Now',
      services: 'Our Services',
      therapy: 'Therapy',
      prosthetics: 'Prosthetics',
      orthodontics: 'Orthodontics',
      implants: 'Implants',
      whyUs: 'Why Us?',
      feature1: 'Easy Booking',
      feature1Desc: 'Book an appointment with just one click',
      feature2: 'Expert Doctors',
      feature2Desc: 'Professionals with 15+ years of experience',
      feature3: 'Modern Technology',
      feature3Desc: 'Latest dental equipment and technology',
      feature4: '24/7 Support',
      feature4Desc: 'Always ready to help you'
    }
  };

  const t = translations[language];

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{t.welcome}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <Link to="/appointment" className="btn btn-primary">
            {t.booking}
          </Link>
        </div>
        <div className="hero-image">
          <div className="hero-emoji">🦷😁</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>{t.services}</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🪥</div>
            <h3>{t.therapy}</h3>
            <p>Tish kasalliklari davolash va profilaktika</p>
          </div>
          <div className="service-card">
            <div className="service-icon">👑</div>
            <h3>{t.prosthetics}</h3>
            <p>Tish protezlari va ko'priklar</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📐</div>
            <h3>{t.orthodontics}</h3>
            <p>Tish tekislash va paraxon tuzatish</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>{t.implants}</h3>
            <p>Tish implantatsiyasi va rekonstruksiyasi</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <h2>{t.whyUs}</h2>
        <div className="features-grid">
          <div className="feature">
            <FaCalendarAlt className="feature-icon" />
            <h3>{t.feature1}</h3>
            <p>{t.feature1Desc}</p>
          </div>
          <div className="feature">
            <FaUsers className="feature-icon" />
            <h3>{t.feature2}</h3>
            <p>{t.feature2Desc}</p>
          </div>
          <div className="feature">
            <FaHeartbeat className="feature-icon" />
            <h3>{t.feature3}</h3>
            <p>{t.feature3Desc}</p>
          </div>
          <div className="feature">
            <FaClock className="feature-icon" />
            <h3>{t.feature4}</h3>
            <p>{t.feature4Desc}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Yanada ma'lumot?</h2>
        <p>Bizning shifokorlar sizni kutmoqdalar</p>
        <Link to="/appointment" className="btn btn-light">
          Hozir navbat oling →
        </Link>
      </section>
    </main>
  );
};

export default Home;
