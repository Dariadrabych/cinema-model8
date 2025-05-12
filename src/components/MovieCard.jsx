import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Жанр:</strong> {movie.genre}</p>
      <p><strong>Сеанс:</strong> {movie.date} о {movie.time}</p>

      {/* КНОПКА "Забронювати" */}
      <Link to={`/booking/${movie.id}`}>
        <button className="book-btn">Забронювати</button>
      </Link>
    </div>
  );
};

export default MovieCard;
