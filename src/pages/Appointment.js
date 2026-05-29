import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Appointment.css';

const Appointment = ({ language }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    doctor: '',
    service: '',
    paymentMethod: 'cash'
  });

  const [appointments, setAppointments] = useState([
    { id: 1, name: 'Aziz Karimov', phone: '+998 90 123 45 67', date: '2024-06-15', time: '10:00', doctor: 'Dr. Alisher Norboyev', status: 'confirmed' },
    { id: 2, name: 'Guli Yusupova', phone: '+998 91 234 56 78', date: '2024-06-15', time: '14:00', doctor: 'Dr. Naima Raxmonova', status: 'pending' }
  ]);

  const translations = {
    uz: {
      appointment: 'Navbat olish',
      step1: '1-qadam: O\'z ma\'lumotlaringiz',
      step2: '2-qadam: Shifokor va xizmatni tanlang',
      step3: '3-qadam: Vaqt tanlang',
      step4: '4-qadam: To\'lovni tasdiqing',
      name: 'To\'liq ismingiz',
      phone: 'Telefon raqam',
      email: 'Email manzili',
      select: 'Tanlang',
      next: 'Keyingi',
      back: 'Orqaga',
      confirm: 'Tasdiqla',
      doctor: 'Shifokor',
      service: 'Xizmat turi',
      date: 'Sana',
      time: 'Vaqt',
      paymentMethod: 'To\'lov usuli',
      cash: 'Naqd pul',
      card: 'Kartadan',
      payme: 'Payme',
      click: 'Click',
      success: 'Navbat muvaffaqiyatli olindi!',
      existingAppointments: 'Mavjud navbatlar',
      status: 'Holati',
      confirmed: 'Tasdiqlangan',
      pending: 'Kutilmoqda'
    },
    ru: {
      appointment: 'Запись на приём',
      step1: 'Шаг 1: Ваша информация',
      step2: 'Шаг 2: Выберите врача и услугу',
      step3: 'Шаг 3: Выберите время',
      step4: 'Шаг 4: Подтвердите платёж',
      name: 'Полное имя',
      phone: 'Номер телефона',
      email: 'Электронная почта',
      select: 'Выбрать',
      next: 'Далее',
      back: 'Назад',
      confirm: 'Подтвердить',
      doctor: 'Врач',
      service: 'Тип услуги',
      date: 'Дата',
      time: 'Время',
      paymentMethod: 'Способ платежа',
      cash: 'Наличные',
      card: 'Карта',
      payme: 'Payme',
      click: 'Click',
      success: 'Запись успешно создана!',
      existingAppointments: 'Существующие записи',
      status: 'Статус',
      confirmed: 'Подтверждено',
      pending: 'Ожидается'
    },
    en: {
      appointment: 'Book Appointment',
      step1: 'Step 1: Your Information',
      step2: 'Step 2: Select Doctor and Service',
      step3: 'Step 3: Select Time',
      step4: 'Step 4: Confirm Payment',
      name: 'Full Name',
      phone: 'Phone Number',
      email: 'Email Address',
      select: 'Select',
      next: 'Next',
      back: 'Back',
      confirm: 'Confirm',
      doctor: 'Doctor',
      service: 'Service Type',
      date: 'Date',
      time: 'Time',
      paymentMethod: 'Payment Method',
      cash: 'Cash',
      card: 'Card',
      payme: 'Payme',
      click: 'Click',
      success: 'Appointment successfully booked!',
      existingAppointments: 'Existing Appointments',
      status: 'Status',
      confirmed: 'Confirmed',
      pending: 'Pending'
    }
  };

  const doctors = [
    { id: 1, name: 'Dr. Alisher Norboyev', specialty: 'Terapiya mutaxassisi' },
    { id: 2, name: 'Dr. Naima Raxmonova', specialty: 'Ortodontiya mutaxassisi' },
    { id: 3, name: 'Dr. Sherali Qo\'chqorov', specialty: 'Implantatsiya mutaxassisi' },
    { id: 4, name: 'Dr. Mohira Shodmonova', specialty: 'Protez mutaxassisi' }
  ];

  const services = [
    'Tish terapiyasi',
    'Tish tozalash',
    'Tish oq qilish',
    'Implantatsiya',
    'Protezlash',
    'Boltani tuzatish'
  ];

  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

  const t = translations[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBackStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const newAppointment = {
      id: appointments.length + 1,
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      doctor: formData.doctor,
      status: 'pending'
    };
    setAppointments([...appointments, newAppointment]);
    alert(t.success);
    setFormData({ name: '', phone: '', email: '', date: '', time: '', doctor: '', service: '', paymentMethod: 'cash' });
    setStep(1);
  };

  return (
    <main className="appointment">
      <div className="appointment-container">
        <h1 className="page-title">{t.appointment}</h1>

        <div className="appointment-content">
          {/* Steps Indicator */}
          <div className="steps-indicator">
            {[1, 2, 3, 4].map(s => (
              <div
                key={s}
                className={`step ${step === s ? 'active' : ''} ${step > s ? 'completed' : ''}`}
                onClick={() => s <= step && setStep(s)}
              >
                <span>{s}</span>
              </div>
            ))}
          </div>

          {/* Form Steps */}
          <div className="form-section">
            {/* Step 1 */}
            {step === 1 && (
              <div className="form-step">
                <h2>{t.step1}</h2>
                <div className="form-group">
                  <label>
                    <FaUser /> {t.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ismingizni kiriting"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FaPhone /> {t.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FaEnvelope /> {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="form-step">
                <h2>{t.step2}</h2>
                <div className="form-group">
                  <label>{t.doctor}</label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                  >
                    <option value="">{t.select}</option>
                    {doctors.map(doc => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} - {doc.specialty}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>{t.service}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">{t.select}</option>
                    {services.map((service, i) => (
                      <option key={i} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="form-step">
                <h2>{t.step3}</h2>
                <div className="form-group">
                  <label>
                    <FaCalendarAlt /> {t.date}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>{t.time}</label>
                  <div className="time-slots">
                    {timeSlots.map(slot => (
                      <button
                        key={slot}
                        className={`time-slot ${formData.time === slot ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, time: slot })}
                      >
                        <FaClock /> {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="form-step">
                <h2>{t.step4}</h2>
                <div className="summary">
                  <p><strong>Ism:</strong> {formData.name}</p>
                  <p><strong>Tel:</strong> {formData.phone}</p>
                  <p><strong>Shifokor:</strong> {formData.doctor}</p>
                  <p><strong>Xizmat:</strong> {formData.service}</p>
                  <p><strong>Sana & Vaqt:</strong> {formData.date} - {formData.time}</p>
                </div>
                <div className="form-group">
                  <label>{t.paymentMethod}</label>
                  <div className="payment-options">
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                      />
                      {t.cash}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                      />
                      {t.card}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="payme"
                        checked={formData.paymentMethod === 'payme'}
                        onChange={handleInputChange}
                      />
                      {t.payme}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="click"
                        checked={formData.paymentMethod === 'click'}
                        onChange={handleInputChange}
                      />
                      {t.click}
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-buttons">
              {step > 1 && (
                <button className="btn btn-secondary" onClick={handleBackStep}>
                  {t.back}
                </button>
              )}
              {step < 4 && (
                <button className="btn btn-primary" onClick={handleNextStep}>
                  {t.next}
                </button>
              )}
              {step === 4 && (
                <button className="btn btn-success" onClick={handleSubmit}>
                  {t.confirm}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Existing Appointments */}
        <div className="existing-appointments">
          <h2>{t.existingAppointments}</h2>
          <div className="appointments-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t.name}</th>
                  <th>{t.phone}</th>
                  <th>{t.date}</th>
                  <th>{t.time}</th>
                  <th>{t.doctor}</th>
                  <th>{t.status}</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(apt => (
                  <tr key={apt.id}>
                    <td>#{apt.id}</td>
                    <td>{apt.name}</td>
                    <td>{apt.phone}</td>
                    <td>{apt.date}</td>
                    <td>{apt.time}</td>
                    <td>{apt.doctor}</td>
                    <td><span className={`status ${apt.status}`}>{apt.status === 'confirmed' ? t.confirmed : t.pending}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Appointment;
