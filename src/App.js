import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import MovieList from './components/MovieList';
import moviesData from './data/movies';
import CinemaHall from './components/CinemaHall';
import './App.css';

// === СТОРІНКА ГОЛОВНА ===
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Кінотеатр</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Пошук фільму..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', width: '50%' }}
        />
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

// === СТОРІНКА БРОНЮВАННЯ ===
const BookingPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Бронювання фільму №{id}</h1>
      <CinemaHall />
    </div>
  );
};

// === ГОЛОВНИЙ КОМПОНЕНТ З ROUTER ===
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

