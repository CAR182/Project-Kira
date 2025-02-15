import { routes } from 'Router';

import styles from './controlBar.module.css';

const ControlBar = () => (
  <div className={styles.container}>
    <div className={styles.playBtn}>
      <img src={`${routes.icons}/play-icon.png`} alt={'play'} />
      <span>Play</span>
    </div>
    <div className={styles.trailerBtn}>
      <img src={`${routes.icons}/play-icon.png`} alt={'trailer'} />
      <span>Trailer</span>
    </div>
    <div className={styles.addBtn}>
      <img src={`${routes.icons}/add-icon.png`} alt={'add'} />
    </div>
    <div className={styles.groupWatch}>
      <img src={`${routes.icons}/group-icon.png`} alt={'groupWatch'} />
    </div>
  </div>
);

export default ControlBar;
