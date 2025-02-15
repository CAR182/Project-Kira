import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserAvatar } from 'redux/reducers/UserReducer';
import { routes } from 'Router';
import { NavBtn } from 'components/Widgets';
import styles from './appbar.module.css';

const navBtns = [
  {
    route: routes.home,
    icon: `${routes.icons}/home-icon.svg`,
    text: 'Home',
  },
  {
    route: `${routes.category}/series`,
    icon: `${routes.icons}/series-icon.svg`,
    text: 'Series',
  },
  {
    route: `${routes.category}/original`,
    icon: `${routes.icons}/original-icon.svg`,
    text: 'Originals',
  },
];

const AppBar = () => {
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  useEffect(() => {
    // nav(); // Remove for Dev Work
  }, [userName]);

  const nav = () => {
    if (!userName) {
      //Always land on home if there is no user
      navigate(routes.login);
    } else navigate(routes.home);
  };

  return (
    <nav className={styles.navBar}>
      <img className={styles.logo} onClick={nav} src={`${routes.images}/logo.svg`} />
      {!userName ? (
        <div className={styles.loginBtn} onClick={() => navigate(routes.userSelect)}>
          Login
        </div>
      ) : (
        <Fragment>
          <div className={styles.navBtns}>
            {navBtns.map((item) => (
              <NavBtn key={item.text} route={item.route} icon={item.icon} text={item.text} />
            ))}
          </div>

          <div className={styles.userMenu}>
            <span>{userName}</span>
            <img src={userAvatar} alt={userName} onClick={() => navigate(routes.userSelect)} />
          </div>
        </Fragment>
      )}
    </nav>
  );
};
export default AppBar;
