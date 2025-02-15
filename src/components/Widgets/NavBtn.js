import { useNavigate } from 'react-router-dom';
import styles from './navBtn.module.css';

const NavBtn = ({ route, icon, text }) => {
  const navigate = useNavigate();

  return (
    <a className={styles.navBtn} onClick={() => navigate(route)}>
      <img src={icon} alt={text} />
      <span>{text}</span>
    </a>
  );
};

export default NavBtn;
