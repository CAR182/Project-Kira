import { routes } from 'Router';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './filters.module.css';

const Filters = ({ filters }) => {
  const navigate = useNavigate();

  const goTo = (category) => {
    navigate(`${routes.category}/${category}`);
  };

  return (
    <div className={styles.container}>
      {Object.keys(filters).map((key, index) => (
        <div className={styles.filter} key={index} onClick={() => goTo(key)}>
          <img src={filters[key].image} />
          <video src={filters[key].video} autoPlay={true} loop={true} playsInline={true} type='video/mp4' />
        </div>
      ))}
    </div>
  );
};

export default Filters;
