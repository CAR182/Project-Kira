import { Link } from 'react-router-dom';
import styles from './tiles.module.css';

const Tile = ({ tile }) => (
  <div className={styles.tile}>
    <Link to={`/detail/${tile.title}`}>
      <img src={tile.cardImg} />
    </Link>
  </div>
);

export default Tile;
