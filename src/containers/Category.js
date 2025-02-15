import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMovies } from 'redux/reducers/MovieReducer';
import { routes } from 'Router';
import { Tile } from 'components/Tiles';

import styles from './category.module.css';

const Category = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filteredMovies, setMovies] = useState([]);
  const [title, setTitle] = useState('');

  const movies = useSelector(selectMovies);

  useEffect(() => {
    filterByCategory();
  }, [id]);

  const filterByCategory = () => {
    if (id in movies) {
      const title = id.replace('-', ' ');
      setTitle(title);
      setMovies(movies[id]);
    } else navigate(routes.notFound);
  };

  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        src={`${routes.video}/${id}-brand.mp4`}
        autoPlay={true}
        loop={true}
        playsInline={true}
        type='video/mp4'
      />
      <span className={styles.title}>{title}</span>
      <div className={styles.tiles}>
        {filteredMovies.map((tile) => (
          <Tile key={tile.title} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default Category;
