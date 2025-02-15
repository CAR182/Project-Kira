import { routes } from 'Router';

import styles from './login.module.css';
export const Login = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.mainBlock}>
        <img className={styles.logoSetOne} src={`${routes.images}/cta-logo-one.svg`} />
        <div className={styles.signUpBtn}>Start Streaming Now</div>
        <span className={styles.description}>
          Host virtual movie nights with GroupWatch. Pause, rewind and react with up to six personal friends. To invite
          or be invited to join GroupWatch, subscription is required
        </span>
        <img className={styles.logoSetTwo} src={`${routes.images}/cta-logo-two.png`} />
      </div>
      <img className={styles.bgImage} src={`${routes.images}/login-background.jpg`} />
    </div>
  </div>
);

export default Login;
