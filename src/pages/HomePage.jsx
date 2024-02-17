import { useEffect, useState } from 'react';
import { getMovies } from '../apiService';
import MovieList from '../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const fetchMovies = await getMovies({ abortController: controller });

        setMovies(fetchMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>Oops, somethings wrong</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
