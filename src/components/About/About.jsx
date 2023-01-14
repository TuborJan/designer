import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.top}>
        <img
          src="https://tuborjan.github.io/designer/img/ovalhalf.png"
          alt="oval"
        />
        <span className={`${styles.circle} ${styles.circletop}`}></span>
        <span className={`${styles.circle} ${styles.circletop2}`}></span>
      </div>
      <div className={styles.maincontent}>
        <div className={styles.maintext}>
          <h2 className={styles.header}>
            About <span>us.</span>
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Quis
            ipsum suspendisse.
          </p>
          <ul className={styles.list}>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor.</li>
          </ul>
          <button>read more</button>
        </div>
        <div className={styles.personimage}>
          <span className={styles.backgroundcircle}></span>
          <img
            src="https://tuborjan.github.io/designer/img/person2.png"
            alt="person"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={`${styles.circle} ${styles.circletop}`}></span>
        <span className={`${styles.circle} ${styles.circletop2}`}></span>
        <img
          src="https://tuborjan.github.io/designer/img/ovalhalf2.png"
          alt="oval"
        />
      </div>
    </section>
  );
};

export default About;
