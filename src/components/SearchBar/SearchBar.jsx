import { useSearchParams } from 'react-router-dom';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    const movieName = event.target.elements.query.value;
    searchParams.set('query', movieName);
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        name="query"
        type="text"
        placeholder="Search for a movie..."
        className={styles.searchInput}
        defaultValue={searchParams.get('query') ?? ''}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}
