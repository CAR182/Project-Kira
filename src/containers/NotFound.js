import { useEffect, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import misc from 'api/miscData.json';
import { routes } from 'Router';

import styles from './notFound.module.css';

const NotFound = () => {
  const [theme, setTheme] = useState({});
  const navigate = useNavigate();

  /* On Mount */
  useEffect(() => {
    randomise();
  }, []);

  const randomise = () => {
    const index = Math.floor(Math.random() * misc.notFound.length);
    setTheme(misc.notFound[index]);
  };

  return (
    <div className={styles.notFound}>
      {theme && (
        <Fragment>
          <img src={theme.img} />
          <div>
            <h1>OOPS! Page Not Found.</h1>
            <h3>{theme.message}</h3>
            <button onClick={() => navigate(routes.home)}>Back to Home</button>
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default NotFound;
