import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getReviewsById } from '../../apiService';
import defaultProfileImg from '../../assets/default-profile.png';
import styles from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsById(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);
  return (
    <div className={styles.reviewsContainer}>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id} className={styles.reviewItem}>
              <div>
                <h3 className={styles.authorName}>{review.author}</h3>
                <div>
                  <img
                    className={styles.authorAvatar}
                    src={
                      review.author_details.avatar_path
                        ? `https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`
                        : defaultProfileImg
                    }
                    alt={review.author}
                  />
                </div>
                <p>Rating: {review.author_details.rating}</p>
                <div className={styles.reviewContent}>{review.content}</div>
                <p>
                  <a
                    className={styles.readMoreLink}
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noReviewsMessage}>No reviews available.</p>
      )}
    </div>
  );
}
