import styles from './detailBar.module.css';

const DetailBar = ({ movie }) => (
  <div className={styles.tabs}>
    <span>Details</span>
    <div className={styles.divider} />
    <span className={styles.title}></span>
    <div className={styles.details}>
      <div className={styles.truncated}>
        <p>{movie.descriptionFull}</p>
      </div>
      <div className={styles.metaData}>
        <div className={styles.element}>
          <span>Duration</span>
          <span>{movie.meta.duration}</span>
        </div>
        <div className={styles.element}>
          <span>Release Date</span>
          <span>{movie.meta.releaseDate}</span>
        </div>
        <div className={[styles.element]}>
          <span>Genre</span>
          <div className={styles.genre}>
            {movie.meta.genre.map((entry, index) => (
              <span key={index}>{entry}</span>
            ))}
          </div>
        </div>
        <div className={styles.element}>
          <span>Rating</span>
          <span className={styles.rating}>{movie.meta.rating}</span>
        </div>
        {movie.meta.director && (
          <div className={styles.element}>
            <span>Director</span>
            {movie.meta.director.map((entry, index) => (
              <span key={index}>{entry}</span>
            ))}
          </div>
        )}
        {movie.meta.starring && (
          <div className={styles.element}>
            <span>Starring</span>
            {movie.meta.starring.map((entry, index) => (
              <span key={index}>{entry}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DetailBar;
