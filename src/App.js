import React, { useState } from 'react';
import MovieList from './components/MovieList';
import moviesData from './data/movies';
import './App.css';

const App = () => {
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

export default App;

