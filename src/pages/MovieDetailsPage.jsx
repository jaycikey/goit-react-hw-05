import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from '../apiService';
import MovieDetails from '../components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovieData(fetchedMovie);
      } catch (error) {
        setError('Failed to fetch movie details.');
      }
    }
    fetchData();
  }, [movieId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movieData && (
        <MovieDetails movieData={movieData} IMAGE_BASE_URL={IMAGE_BASE_URL} />
      )}
      <Outlet />
    </div>
  );
}
