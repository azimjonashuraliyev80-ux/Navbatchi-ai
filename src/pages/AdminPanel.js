import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaChartBar, FaUsers } from 'react-icons/fa';
import './AdminPanel.css';

const AdminPanel = ({ language }) => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [appointments, setAppointments] = useState([
    { id: 1, name: 'Aziz Karimov', phone: '+998 90 123 45 67', date: '2024-06-15', time: '10:00', doctor: 'Dr. Alisher Norboyev', service: 'Tish terapiyasi', status: 'confirmed', payment: 'cash' },
    { id: 2, name: 'Guli Yusupova', phone: '+998 91 234 56 78', date: '2024-06-15', time: '14:00', doctor: 'Dr. Naima Raxmonova', service: 'Ortodontiya', status: 'pending', payment: 'card' },
    { id: 3, name: 'Sardor Miriev', phone: '+998 93 345 67 89', date: '2024-06-16', time: '11:00', doctor: 'Dr. Sherali Qo\'chqorov', service: 'Implantatsiya', status: 'confirmed', payment: 'payme' }
  ]);

  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Alisher Norboyev', specialty: 'Tish terapiyasi mutaxassisi', phone: '+998 90 111 11 11', status: 'active' },
    { id: 2, name: 'Dr. Naima Raxmonova', specialty: 'Ortodontiya mutaxassisi', phone: '+998 91 222 22 22', status: 'active' },
    { id: 3, name: 'Dr. Sherali Qo\'chqorov', specialty: 'Implantatsiya mutaxassisi', phone: '+998 93 333 33 33', status: 'active' },
    { id: 4, name: 'Dr. Mohira Shodmonova', specialty: 'Protez mutaxassisi', phone: '+998 94 444 44 44', status: 'inactive' }
  ]);

  const translations = {
    uz: {
      admin: 'Admin Panel',
      appointments: 'Navbatlar',
      doctors: 'Shifokorlar',
      statistics: 'Statistika',
      search: 'Qidirish',
      edit: 'Tahrirlash',
      delete: 'O\'chirish',
      add: 'Qo\'shish',
      status: 'Holati',
      confirmed: 'Tasdiqlangan',
      pending: 'Kutilmoqda',
      cancelled: 'Bekor qilindi',
      active: 'Faol',
      inactive: 'Nofaol',
      totalAppointments: 'Jami navbatlar',
      confirmedAppointments: 'Tasdiqlangan navbatlar',
      totalDoctors: 'Jami shifokorlar',
      activeDoctors: 'Faol shifokorlar',
      todayAppointments: 'Bugun navbatlar',
      revenue: 'Daromad',
      name: 'Ism',
      phone: 'Telefon',
      date: 'Sana',
      time: 'Vaqt',
      doctor: 'Shifokor',
      service: 'Xizmat',
      specialty: 'Mutaxassislik',
      payment: 'To\'lov usuli',
      action: 'Amal',
      addNewAppointment: 'Yangi navbat qo\'shish',
      addNewDoctor: 'Yangi shifokor qo\'shish',
      close: 'Yopish',
      save: 'Saqlash',
      cancel: 'Bekor qilish'
    },
    ru: {
      admin: 'Панель администратора',
      appointments: 'Приёмы',
      doctors: 'Врачи',
      statistics: 'Статистика',
      search: 'Поиск',
      edit: 'Отредактировать',
      delete: 'Удалить',
      add: 'Добавить',
      status: 'Статус',
      confirmed: 'Подтверждено',
      pending: 'Ожидается',
      cancelled: 'Отменено',
      active: 'Онлайн',
      inactive: 'Оффлайн',
      totalAppointments: 'Всего приёмов',
      confirmedAppointments: 'Подтвержденных',
      totalDoctors: 'Всего врачей',
      activeDoctors: 'Активных',
      todayAppointments: 'Приёмы сегодня',
      revenue: 'Доход',
      name: 'Имя',
      phone: 'Телефон',
      date: 'Дата',
      time: 'Время',
      doctor: 'Врач',
      service: 'Услуга',
      specialty: 'Специальность',
      payment: 'Способ оплаты',
      action: 'Действие',
      addNewAppointment: 'Добавить новый приём',
      addNewDoctor: 'Добавить нового врача',
      close: 'Закрыть',
      save: 'Окончить',
      cancel: 'Отменить'
    },
    en: {
      admin: 'Admin Panel',
      appointments: 'Appointments',
      doctors: 'Doctors',
      statistics: 'Statistics',
      search: 'Search',
      edit: 'Edit',
      delete: 'Delete',
      add: 'Add',
      status: 'Status',
      confirmed: 'Confirmed',
      pending: 'Pending',
      cancelled: 'Cancelled',
      active: 'Active',
      inactive: 'Inactive',
      totalAppointments: 'Total Appointments',
      confirmedAppointments: 'Confirmed',
      totalDoctors: 'Total Doctors',
      activeDoctors: 'Active',
      todayAppointments: 'Today\'s Appointments',
      revenue: 'Revenue',
      name: 'Name',
      phone: 'Phone',
      date: 'Date',
      time: 'Time',
      doctor: 'Doctor',
      service: 'Service',
      specialty: 'Specialty',
      payment: 'Payment Method',
      action: 'Action',
      addNewAppointment: 'Add New Appointment',
      addNewDoctor: 'Add New Doctor',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel'
    }
  };

  const t = translations[language];

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id));
  };

  const handleDeleteDoctor = (id) => {
    setDoctors(doctors.filter(doc => doc.id !== id));
  };

  const handleStatusChange = (id) => {
    setAppointments(appointments.map(apt =>
      apt.id === id
        ? { ...apt, status: apt.status === 'confirmed' ? 'pending' : 'confirmed' }
        : apt
    ));
  };

  const filteredAppointments = appointments.filter(apt =>
    apt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.phone.includes(searchTerm)
  );

  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalAppointments: appointments.length,
    confirmedAppointments: appointments.filter(a => a.status === 'confirmed').length,
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter(d => d.status === 'active').length
  };

  return (
    <main className="admin-panel">
      <div className="admin-container">
        <h1 className="admin-title">⚙️ {t.admin}</h1>

        {/* Navigation Tabs */}
        <div className="admin-tabs">
          <button
            className={`tab ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointments')}
          >
            📅 {t.appointments}
          </button>
          <button
            className={`tab ${activeTab === 'doctors' ? 'active' : ''}`}
            onClick={() => setActiveTab('doctors')}
          >
            👨‍⚕️ {t.doctors}
          </button>
          <button
            className={`tab ${activeTab === 'statistics' ? 'active' : ''}`}
            onClick={() => setActiveTab('statistics')}
          >
            📊 {t.statistics}
          </button>
        </div>

        {/* Statistics Tab */}
        {activeTab === 'statistics' && (
          <div className="tab-content">
            <div className="stats-grid">
              <div className="stat-card">
                <FaChartBar className="stat-icon" />
                <h3>{t.totalAppointments}</h3>
                <p className="stat-number">{stats.totalAppointments}</p>
              </div>
              <div className="stat-card">
                <FaChartBar className="stat-icon" />
                <h3>{t.confirmedAppointments}</h3>
                <p className="stat-number">{stats.confirmedAppointments}</p>
              </div>
              <div className="stat-card">
                <FaUsers className="stat-icon" />
                <h3>{t.totalDoctors}</h3>
                <p className="stat-number">{stats.totalDoctors}</p>
              </div>
              <div className="stat-card">
                <FaUsers className="stat-icon" />
                <h3>{t.activeDoctors}</h3>
                <p className="stat-number">{stats.activeDoctors}</p>
              </div>
            </div>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="tab-content">
            <div className="header-actions">
              <div className="search-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder={t.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="btn-add" onClick={() => setShowAddForm(!showAddForm)}>
                <FaPlus /> {t.add}
              </button>
            </div>

            {/* Appointments Table */}
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>{t.name}</th>
                    <th>{t.phone}</th>
                    <th>{t.date}</th>
                    <th>{t.time}</th>
                    <th>{t.doctor}</th>
                    <th>{t.service}</th>
                    <th>{t.payment}</th>
                    <th>{t.status}</th>
                    <th>{t.action}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map(apt => (
                    <tr key={apt.id}>
                      <td>#{apt.id}</td>
                      <td>{apt.name}</td>
                      <td>{apt.phone}</td>
                      <td>{apt.date}</td>
                      <td>{apt.time}</td>
                      <td>{apt.doctor}</td>
                      <td>{apt.service}</td>
                      <td>{apt.payment}</td>
                      <td>
                        <button
                          className={`status-btn ${apt.status}`}
                          onClick={() => handleStatusChange(apt.id)}
                        >
                          {apt.status === 'confirmed' ? t.confirmed : t.pending}
                        </button>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-edit" title={t.edit}>
                            <FaEdit />
                          </button>
                          <button
                            className="btn-delete"
                            title={t.delete}
                            onClick={() => handleDeleteAppointment(apt.id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Doctors Tab */}
        {activeTab === 'doctors' && (
          <div className="tab-content">
            <div className="header-actions">
              <div className="search-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder={t.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="btn-add" onClick={() => setShowAddForm(!showAddForm)}>
                <FaPlus /> {t.add}
              </button>
            </div>

            {/* Doctors Table */}
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>{t.name}</th>
                    <th>{t.specialty}</th>
                    <th>{t.phone}</th>
                    <th>{t.status}</th>
                    <th>{t.action}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDoctors.map(doc => (
                    <tr key={doc.id}>
                      <td>#{doc.id}</td>
                      <td>{doc.name}</td>
                      <td>{doc.specialty}</td>
                      <td>{doc.phone}</td>
                      <td>
                        <span className={`status-badge ${doc.status}`}>
                          {doc.status === 'active' ? t.active : t.inactive}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-edit" title={t.edit}>
                            <FaEdit />
                          </button>
                          <button
                            className="btn-delete"
                            title={t.delete}
                            onClick={() => handleDeleteDoctor(doc.id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminPanel;
