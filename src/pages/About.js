import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaHeartbeat } from 'react-icons/fa';
import './About.css';

const About = ({ language }) => {
  const translations = {
    uz: {
      about: 'Haqimizda',
      title: 'NAVBATCHI AI Stomatologiya Klinikai',
      description: 'Sog\'lomliq va jamilik dil bilan',
      founded: 'Asos solingan',
      patients: 'Bemorlar soni',
      doctors: 'Tajribali shifokorlar',
      operations: 'Bajarilgan operatsiyalar',
      mission: 'Bizning missiya',
      missionText: 'Har bir bemor uchun yuqori sifatli stomatologik xizmatlarni taqdim etish va ularning sog\'lomligi bilan qaygurish',
      vision: 'Bizning ko\'rinish',
      visionText: 'Markaziy Osiyoda eng yaxshi stomatologik klinika bo\'lish',
      values: 'Bizning qadriyatlar',
      value1: 'Sifat',
      value1Text: 'Eng yuqori sifatli xizmatlarni taqdim etish',
      value2: 'Shafqat',
      value2Text: 'Har bir bemor bilan ehtiyotkorlik va shafqat bilan muomala qilish',
      value3: 'Innovatsiya',
      value3Text: 'Eng yangi texnologiyalarni qo\'llash',
      value4: 'Ishonch',
      value4Text: 'Bemorlarning ishonchini qozonish',
      address: 'Manzil',
      phone: 'Telefon',
      hours: 'Ish vaqti',
      monday: 'Dushanbadan Jumaaga',
      weekend: 'Shanba-Yakshanba',
      why: 'Nima uchun NAVBATCHI AI?',
      why1: 'Zamonaviy texnologiya',
      why1Text: 'Eng yangi stomatologik asboblar va texnologiyalar',
      why2: 'Tajribali shifokorlar',
      why2Text: '15+ yillik tajribali professional shifokorlar',
      why3: 'Qulay muhit',
      why3Text: 'Bemorlar uchun qulay va xotirjam muhit',
      why4: 'Oson navbat',
      why4Text: 'NAVBATCHI AI orqali bir kalit bosishda navbat olish',
      team: 'Bizning jamoa',
      teamText: 'Sog\'lomliq uchun bag\'li 50+ ta professional'
    },
    ru: {
      about: 'О нас',
      title: 'Стоматологическая клиника NAVBATCHI AI',
      description: 'Здоровье с любовью',
      founded: 'Основана',
      patients: 'Количество пациентов',
      doctors: 'Опытные врачи',
      operations: 'Проведённые операции',
      mission: 'Наша миссия',
      missionText: 'Предоставлять высококачественные стоматологические услуги для каждого пациента',
      vision: 'Наше видение',
      visionText: 'Лучшая стоматологическая клиника в Центральной Азии',
      values: 'Наши ценности',
      value1: 'Качество',
      value1Text: 'Предоставлять высококачественные услуги',
      value2: 'Компассия',
      value2Text: 'Обращаться к каждому пациенту с заботой',
      value3: 'Инновация',
      value3Text: 'Применять новейшие технологии',
      value4: 'Доверие',
      value4Text: 'Завоевывать доверие пациентов',
      address: 'Адрес',
      phone: 'Телефон',
      hours: 'Режим работы',
      monday: 'Пн-Пт',
      weekend: 'Сб-Вс',
      why: 'Почему NAVBATCHI AI?',
      why1: 'Последние технологии',
      why1Text: 'Новейшее стоматологическое оборудование',
      why2: 'Опытные врачи',
      why2Text: 'Профессионалы с опытом более 15 лет',
      why3: 'Комфортная среда',
      why3Text: 'Удобная и спокойная атмосфера для пациентов',
      why4: 'Легкая запись',
      why4Text: 'Книга по нажатию NAVBATCHI AI',
      team: 'Наша команда',
      teamText: 'Более 50 профессионалов, приверженных здоровью'
    },
    en: {
      about: 'About Us',
      title: 'NAVBATCHI AI Dental Clinic',
      description: 'Health with love',
      founded: 'Founded',
      patients: 'Happy Patients',
      doctors: 'Expert Doctors',
      operations: 'Operations Done',
      mission: 'Our Mission',
      missionText: 'To provide high-quality dental services to every patient and care for their health',
      vision: 'Our Vision',
      visionText: 'To be the best dental clinic in Central Asia',
      values: 'Our Values',
      value1: 'Quality',
      value1Text: 'Delivering high-quality services',
      value2: 'Compassion',
      value2Text: 'Treating every patient with care',
      value3: 'Innovation',
      value3Text: 'Using the latest technology',
      value4: 'Trust',
      value4Text: 'Building patient trust',
      address: 'Address',
      phone: 'Phone',
      hours: 'Working Hours',
      monday: 'Mon-Fri',
      weekend: 'Sat-Sun',
      why: 'Why NAVBATCHI AI?',
      why1: 'Latest Technology',
      why1Text: 'Modern dental equipment',
      why2: 'Expert Doctors',
      why2Text: 'Professionals with 15+ years of experience',
      why3: 'Comfortable Environment',
      why3Text: 'Convenient and peaceful atmosphere',
      why4: 'Easy Booking',
      why4Text: 'One click appointment booking',
      team: 'Our Team',
      teamText: 'More than 50 professionals dedicated to health'
    }
  };

  const t = translations[language];

  return (
    <main className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>{t.title}</h1>
        <p>{t.description}</p>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">2015</div>
            <div className="stat-label">{t.founded}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5000+</div>
            <div className="stat-label">{t.patients}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">{t.doctors}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10000+</div>
            <div className="stat-label">{t.operations}</div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-box">
            <h2>{t.mission}</h2>
            <p>{t.missionText}</p>
          </div>
          <div className="vision-box">
            <h2>{t.vision}</h2>
            <p>{t.visionText}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>{t.values}</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>{t.value1}</h3>
              <p>{t.value1Text}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>{t.value2}</h3>
              <p>{t.value2Text}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>{t.value3}</h3>
              <p>{t.value3Text}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>{t.value4}</h3>
              <p>{t.value4Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-about">
        <div className="container">
          <h2>{t.why}</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🔬</div>
              <h3>{t.why1}</h3>
              <p>{t.why1Text}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">👨‍⚕️</div>
              <h3>{t.why2}</h3>
              <p>{t.why2Text}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🏥</div>
              <h3>{t.why3}</h3>
              <p>{t.why3Text}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📱</div>
              <h3>{t.why4}</h3>
              <p>{t.why4Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-info">
        <div className="container">
          <h2>{t.team}</h2>
          <p className="team-text">{t.teamText}</p>

          <div className="info-grid">
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>{t.address}</h3>
              <p>Toshkent, Mirzo Ulug'bek ko'chasi, 123</p>
            </div>
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>{t.phone}</h3>
              <p>+998 (71) 200-00-00</p>
              <p>+998 (71) 200-00-01</p>
            </div>
            <div className="info-card">
              <FaClock className="info-icon" />
              <h3>{t.hours}</h3>
              <p>{t.monday}: 08:00 - 18:00</p>
              <p>{t.weekend}: 09:00 - 14:00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
