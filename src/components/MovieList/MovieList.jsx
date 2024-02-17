import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

export default function MovieList({ movies, isSearchAttempted = false }) {
  const locations = useLocation();
  return (
    <>
      {movies.length > 0 ? (
        <ul className={styles.movieList}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.movieItem}>
              <Link
                to={`/movies/${movie.id}`}
                state={locations}
                className={styles.movieLink}
              >
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        isSearchAttempted && (
          <p className={styles.noMovies}>
            No movies found. Try a different search.
          </p>
        )
      )}
    </>
  );
}
