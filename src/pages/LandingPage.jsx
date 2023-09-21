import { Link } from 'react-router-dom';
import styles from '@styles/pages/LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={`${styles.hero}`}>
      <div className={`${styles.hero__image}`}>
        <img
          src="chill-dude-sitting.svg"
          alt="An illustration of a guy relaxing with a laptop"
        />
      </div>
      <div className={`${styles.hero__content}`}>
        <h1 className={styles.title}>Increase your productivity 10x</h1>
        <p className={styles.description}>
          Start organizing your life with a simple application, Sign up now to try it out Start organizing your life
          with a simple application, Sign up now to try it out Start organizing your life with a simple application,
          Sign up now to try it out
        </p>
        <div className={styles['call-to-action']}>
          <Link
            className={`${styles['login-btn']}`}
            to="/login"
          >
            Login
          </Link>
          <Link
            className={`${styles['register-btn']}`}
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
