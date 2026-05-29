import React from 'react';
import { FaGraduationCap, FaStethoscope, FaAward } from 'react-icons/fa';
import './Doctors.css';

const Doctors = ({ language }) => {
  const translations = {
    uz: {
      doctors: 'Bizning Shifokorlar',
      specialty: 'Mutaxassislik',
      experience: 'Tajriba',
      education: 'Ta\'limi',
      years: 'yil',
      certificates: 'Sertifikatlar'
    },
    ru: {
      doctors: 'Наши врачи',
      specialty: 'Специальность',
      experience: 'Опыт',
      education: 'Образование',
      years: 'лет',
      certificates: 'Сертификаты'
    },
    en: {
      doctors: 'Our Doctors',
      specialty: 'Specialty',
      experience: 'Experience',
      education: 'Education',
      years: 'years',
      certificates: 'Certificates'
    }
  };

  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Alisher Norboyev',
      specialty: 'Tish terapiyasi mutaxassisi',
      experience: '18',
      education: 'TSTU, Stomatologiya fakulteti',
      certificates: '5+',
      image: '👨‍⚕️',
      description: 'Tish terapiyasi sohasida yuqori malaka egasi'
    },
    {
      id: 2,
      name: 'Dr. Naima Raxmonova',
      specialty: 'Ortodontiya mutaxassisi',
      experience: '15',
      education: 'TSTU, Ortodontiya ixtisosi',
      certificates: '4+',
      image: '👩‍⚕️',
      description: 'Boltani tuzatish va paraxon davolash mutaxassisi'
    },
    {
      id: 3,
      name: 'Dr. Sherali Qo\'chqorov',
      specialty: 'Implantatsiya mutaxassisi',
      experience: '20',
      education: 'TSTU, Xirurgik stomatologiya',
      certificates: '8+',
      image: '👨‍⚕️',
      description: 'Tish implantatsiyasi sohasida eng tajribali doktor'
    },
    {
      id: 4,
      name: 'Dr. Mohira Shodmonova',
      specialty: 'Protez mutaxassisi',
      experience: '12',
      education: 'TSTU, Protez stomatologiyasi',
      certificates: '3+',
      image: '👩‍⚕️',
      description: 'Tish protezlari va ko\'priklar tayyorlashda mutaxassisi'
    },
    {
      id: 5,
      name: 'Dr. Rustam Turaev',
      specialty: 'Tish tozalash mutaxassisi',
      experience: '10',
      education: 'TSTU, Gigiena va profilaktika',
      certificates: '2+',
      image: '👨‍⚕️',
      description: 'Tish tozalash va profilaktik xizmatlar'
    },
    {
      id: 6,
      name: 'Dr. Dilora Xolova',
      specialty: 'Pediatrik stomatolog',
      experience: '8',
      education: 'TSTU, Bolalar stomatologiyasi',
      certificates: '2+',
      image: '👩‍⚕️',
      description: 'Bolalar tish kasalliklari davolash mutaxassisi'
    }
  ];

  const t = translations[language];

  return (
    <main className="doctors">
      <div className="doctors-container">
        <h1 className="page-title">{t.doctors}</h1>

        <div className="doctors-grid">
          {doctorsData.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-image">{doctor.image}</div>
              <div className="doctor-info">
                <h2>{doctor.name}</h2>
                <p className="specialty"><FaStethoscope /> {doctor.specialty}</p>
                <p className="description">{doctor.description}</p>

                <div className="doctor-details">
                  <div className="detail">
                    <FaGraduationCap className="detail-icon" />
                    <div>
                      <strong>{t.experience}</strong>
                      <p>{doctor.experience} {t.years}</p>
                    </div>
                  </div>
                  <div className="detail">
                    <FaAward className="detail-icon" />
                    <div>
                      <strong>{t.certificates}</strong>
                      <p>{doctor.certificates} {t.certificates}</p>
                    </div>
                  </div>
                </div>

                <div className="doctor-education">
                  <strong>{t.education}</strong>
                  <p>{doctor.education}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Doctors;
