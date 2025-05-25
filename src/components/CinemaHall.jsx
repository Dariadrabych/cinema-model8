import React, { useEffect, useState } from 'react';
import './CinemaHall.css';
import BookingService from '../services/BookingService';

const CinemaHall = ({ movieId, selectedSeats, setSelectedSeats, refreshTrigger }) => {
  const rows = 5;
  const seatsPerRow = 8;
  const totalSeats = rows * seatsPerRow;

  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const booked = BookingService.getBookedSeats(movieId);
    setBookedSeats(booked);
  }, [movieId, refreshTrigger]); // ❗ додаємо refreshTrigger

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div className="cinema-container">
      <div className="screen">Екран</div>

      <div className="cinema-grid">
        {Array.from({ length: totalSeats }, (_, index) => (
          <div
            key={index}
            className={`seat 
              ${bookedSeats.includes(index) ? 'booked' : ''}
              ${selectedSeats.includes(index) ? 'selected' : ''}`}
            onClick={() => toggleSeat(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <div className="selected-info">
        Вибрані місця: {selectedSeats.length ? selectedSeats.map(s => s + 1).join(', ') : 'немає'}
      </div>
    </div>
  );
};

export default CinemaHall;
