import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);

  return (
    <header className={`container ${styles.header}`} id="home">
      <div className={styles.logo}>
        <img src="/img/logo.png" alt="shape" />
      </div>
      <nav
        className={modal ? `${styles.nav} ${styles.active}` : `${styles.nav}`}
      >
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>
      <div className={styles.signIn}>
        <button>Sign in</button>
      </div>
      <div className={styles.modal}>
        <span onClick={() => toggleModal()}></span>
      </div>
    </header>
  );
};

export default Header;
