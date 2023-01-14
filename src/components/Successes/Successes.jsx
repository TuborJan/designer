import React from "react";
import styles from "./Successes.module.scss";

const Successes = () => {
  return (
    <section className={styles.successes}>
      <div className={styles.achievements}>
        <div className={styles.achivment}>
          <h2>
            <span className={styles.count}>+</span>
            150
          </h2>
          <p>
            <span className={styles.name}>happy</span>
            students
          </p>
        </div>
        <div className={styles.achivment}>
          <h2>
            <span className={styles.count}>+</span>
            50
          </h2>
          <p>
            <span className={styles.name}>certified</span>
            courses
          </p>
        </div>
        <div className={styles.achivment}>
          <h2>
            <span className={styles.count}>+</span>
            1000
          </h2>
          <p>
            <span className={styles.name}>awards</span>
            received
          </p>
        </div>
      </div>
    </section>
  );
};

export default Successes;
