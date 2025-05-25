import React, { useState } from 'react';
import './CinemaHall.css';

const CinemaHall = () => {
  const rows = 5;
  const seatsPerRow = 8;
  const totalSeats = rows * seatsPerRow;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
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
            className={`seat ${selectedSeats.includes(index) ? 'selected' : ''}`}
            onClick={() => toggleSeat(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <div className="selected-info">
        Вибрані місця: {selectedSeats.map(s => s + 1).join(', ') || 'немає'}
      </div>
    </div>
  );
};

export default CinemaHall;
