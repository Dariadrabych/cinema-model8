import MovieList from '../components/MovieList';
import movies from '../data/movies';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Актуальні фільми</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
