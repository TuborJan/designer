import React from "react";
import styles from "./Slogan.module.scss";

const Slogan = () => {
  return (
    <section className={`container ${styles.slogan}`}>
      <div className={styles.challenges}>
        <div className={styles.discover}>
          <span className={`${styles.left} ${styles.shape}`}></span>
          discover your skills
        </div>
        <div className={styles.oval}>
          <img src="/img/oval.png" alt="oval" />
          <span className={`${styles.first} ${styles.circle}`}></span>
          <div className={styles.title}>
            <h2>
              accept <br />
              <span>new</span> <br />
              challenges <br />
            </h2>
          </div>
          <span className={`${styles.second} ${styles.circle}`}></span>
        </div>
        <div className={styles.discover}>
          discover your skills
          <span className={`${styles.right} ${styles.shape}`}></span>
        </div>
      </div>

      <div className={styles.explore}>
        explore
        <img src="/img/arrowbottom.png" alt="arrow" />
        about
      </div>
    </section>
  );
};

export default Slogan;
