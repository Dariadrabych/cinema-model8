import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import BookingService from '../services/BookingService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const { id } = useParams();
  const movieId = id.toString();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userData, setUserData] = useState({ name: '', phone: '', email: '' });
  const [refreshTrigger, setRefreshTrigger] = useState(false); // ✅ додано для оновлення

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.phone || !userData.email) {
      toast.error("Усі поля обов’язкові для заповнення!");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(userData.email)) {
      toast.error("Неправильний формат email");
      return;
    }

    if (selectedSeats.length === 0) {
      toast.warning("Оберіть хоча б одне місце для бронювання");
      return;
    }

    BookingService.saveBooking(movieId, userData, selectedSeats);
    toast.success("Бронювання успішне!");
    setSelectedSeats([]);
    setUserData({ name: '', phone: '', email: '' });
    setRefreshTrigger(prev => !prev); // ✅ оновлює компонент CinemaHall
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Бронювання фільму #{movieId}</h1>

      <CinemaHall
        movieId={movieId}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        refreshTrigger={refreshTrigger} // ✅ передано
      />

      <form onSubmit={handleSubmit} style={{ marginTop: '20px', maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Ім’я"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />
        <button type="submit">Забронювати</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Booking;

