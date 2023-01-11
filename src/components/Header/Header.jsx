import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={`container ${styles.header}`} id="home">
      <div className={styles.logo}>
        <img src="/img/logo.png" alt="shape" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Courses</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </nav>
      <div className={styles.signIn}>
        <button>Sign in</button>
      </div>
      <div className={styles.modal}>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
