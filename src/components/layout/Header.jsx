import { Link, Outlet } from 'react-router-dom';
import styles from '@styles/components/layout/Header.module.css';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { user } = useAuth();
  const [openHamburger, setOpenHamburger] = useState(false);
  function handleOpenHamburger() {
    setOpenHamburger(!openHamburger);
  }
  return (
    <>
      <header>
        <nav>
          <Link
            to={'/'}
            className={`${styles['logo']} ${styles['nav-links__left']}`}
          >
            Your Second Brain
          </Link>
          <button
            className={`${styles.hamburger}`}
            onClick={() => handleOpenHamburger}
          >
            <div className={`${styles.hamburger__line}`}></div>
            <div className={`${styles.hamburger__line}`}></div>
            <div className={`${styles.hamburger__line}`}></div>
          </button>
          <ul
            role="list"
            className={`${styles['nav-links__mid']}`}
          >
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
          <ul
            role="list"
            className={`${styles['nav-links__right']}`}
          >
            {user.isAuthenticated ? (
              <>
                <li>
                  <Link to={'/app'}>App</Link>
                </li>
                <li>
                  <Link to={'/logout'}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={'/login'}>Login</Link>
                </li>
                <li>
                  <Link to={'/register'}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
