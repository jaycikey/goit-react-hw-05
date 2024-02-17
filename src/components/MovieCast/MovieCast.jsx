import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCreditsById } from '../../apiService';
import defaultProfileImg from '../../assets/default-profile.png';
import styles from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    getCreditsById(movieId).then(data => {
      setCredits(data.cast);
    });
  }, [movieId]);
  return (
    <div>
      <h2>Cast</h2>
      <ul className={styles.castList}>
        {credits.map(member => (
          <li key={member.credit_id} className={styles.castItem}>
            <img
              className={styles.castImage}
              src={
                member.profile_path
                  ? `${IMAGE_BASE_URL}${member.profile_path}`
                  : defaultProfileImg
              }
              alt={member.name}
              width="100"
              height="150"
            />
            <div className={styles.castDetails}>
              <h3 className={styles.castName}>{member.name}</h3>
              <p className={styles.castCharacter}>{member.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
