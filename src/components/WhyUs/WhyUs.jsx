import React from "react";
import styles from "./WhyUs.module.scss";

const WhyUs = () => {
  return (
    <section className={styles.whyus}>
      <div className={styles.personimage}>
        <span className={styles.backgroundcircle}></span>
        <span className={`${styles.circle} ${styles.circleovaltop}`}></span>
        <span className={`${styles.circle} ${styles.circleovalbottom}`}></span>
        <img src="/img/oval2.png" alt="oval" className={styles.oval} />
        <img src="/img/person3.png" alt="person" className={styles.person} />
      </div>
      <div className={styles.maincontent}>
        <h2 className={styles.header}>
          Why <span>us.</span>
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum
          suspendisse consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse.
        </p>
        <button>read more</button>
      </div>
      <p className={styles.explore}>explore</p>
      <span className={`${styles.circle} ${styles.circlebottom}`}></span>
    </section>
  );
};

export default WhyUs;
