import { Link, useLocation } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { useRef } from 'react';
import Backlink from '../BackLink/Backlink';

export default function MovieDetails({ movieData, IMAGE_BASE_URL }) {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  if (!movieData) return <div>Loading...</div>;
  return (
    <div>
      <Backlink href={backLinkRef.current ?? '/'}>Go back</Backlink>
      <div className={styles.detailsContainer}>
        <img
          className={styles.movieImage}
          src={`${IMAGE_BASE_URL}${movieData.poster_path}`}
          alt={movieData.title}
        />
        <div className={styles.movieContent}>
          <h1 className={styles.movieTitle}>
            {movieData.title} ({new Date(movieData.release_date).getFullYear()})
          </h1>
          <p className={styles.movieText}>
            User Score: {Math.round(movieData.vote_average * 10)}%
          </p>
          <h2>Overview</h2>
          <p className={styles.movieText}>{movieData.overview}</p>
          <h3>Genres</h3>
          <ul className={styles.genreList}>
            {movieData.genres.map(genre => (
              <li key={genre.id} className={styles.genreItem}>
                {genre.name}
              </li>
            ))}
          </ul>
          <p className={styles.movieText}>Tagline: {movieData.tagline}</p>
          <p className={styles.movieText}>
            Runtime: {movieData.runtime} minutes
          </p>
          <p className={styles.movieText}>Status: {movieData.status}</p>
          <div className={styles.additionalInfo}>
            <h2>Additional information</h2>
            <Link to={`cast`} className={styles.link}>
              Cast
            </Link>
            <Link to={`reviews`} className={styles.link}>
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
