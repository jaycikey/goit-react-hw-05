import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';
import { getSearchMovieByName } from '../apiService';

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        setIsLoading(true);
        try {
          const result = await getSearchMovieByName(query);
          setMovies(result.results);
        } catch (error) {
          console.error('Search failed:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setMovies([]);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <SearchBar />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <MovieList movies={movies} isSearchAttempted={!!query} />
      )}
    </div>
  );
}
