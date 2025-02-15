import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ControlBar, DetailBar } from 'components/Details';
import LoadingSpinner from 'components/Widgets/LoadingSpinner';
import { getMovie } from 'api/api';
import { routes } from 'Router';

import styles from './detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    loadMovie();
  }, [id]);

  const loadMovie = async () => {
    const data = await getMovie(id);
    if (data) {
      setMovie(data);
    } else navigate(routes.notFound);
  };

  return (
    <div className={styles.container}>
      {!movie ? (
        <LoadingSpinner />
      ) : (
        <Fragment>
          <div className={styles.group}>
            <div className={styles.backgroundImg}>
              <img src={movie.backgroundImg} alt={movie.title} />
            </div>
            <div className={styles.titleImg}>
              <img src={movie.titleImg} alt={movie.title} />
            </div>
            <ControlBar />
            <div className={styles.info}>
              <span> {movie.meta.duration}</span>
              <span> {movie.meta.releaseDate}</span>
              {movie.meta.genre.map((entry, index) => (
                <span key={index}>{entry}</span>
              ))}
            </div>
            <div className={styles.description}>{movie.descriptionShort}</div>
            <DetailBar movie={movie} />
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default Detail;
