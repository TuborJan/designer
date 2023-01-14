import React from "react";
import styles from "./Courses.module.scss";

const Courses = () => {
  return (
    <section className={`container ${styles.courses}`} id="courses">
      <div className={styles.header}>
        <h2>
          FIND
          <span>Your Course.</span>
        </h2>
        <div className={styles.edition}>
          <span className={styles.shape}></span>
          <p>
            edition <br />
            <span className={styles.year}>2022</span>
          </p>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <span className={styles.number}>.01</span>
          <div className={styles.info}>
            <h2 className={styles.name}>
              course <span>01</span>
            </h2>
            <span className={styles.line}></span>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inci- didunt ut labore et.
            </p>
            <button>read more</button>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.number}>.02</span>
          <div className={styles.info}>
            <h2 className={styles.name}>
              course <span>02</span>
            </h2>
            <span className={styles.line}></span>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inci- didunt ut labore et.
            </p>
            <button>read more</button>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.number}>.03</span>
          <div className={styles.info}>
            <h2 className={styles.name}>
              course <span>03</span>
            </h2>
            <span className={styles.line}></span>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inci- didunt ut labore et.
            </p>
            <button>read more</button>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.number}>.04</span>
          <div className={styles.info}>
            <h2 className={styles.name}>
              course <span>04</span>
            </h2>
            <span className={styles.line}></span>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inci- didunt ut labore et.
            </p>
            <button>read more</button>
          </div>
        </div>
      </div>
      <div className={styles.more}>
        <p>more courses</p>
        <button>
          <img src="/img/arrow.png" alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Courses;
