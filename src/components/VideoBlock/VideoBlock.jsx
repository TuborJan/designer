import React from "react";
import styles from "./VideoBlock.module.scss";

const VideoBlock = () => {
  return (
    <section className={`container ${styles.video}`}>
      <div className={`${styles.getstartedleft} ${styles.getstarted}`}>
        <div className={styles.arrowimg}>
          <img src="/img/boldarrow.png" alt="arrow" />
        </div>
        <p>
          ready to <br />
          get started
        </p>
      </div>
      <div className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/4yrpJn0kNNM"
          title="YouTube video player"
          frameBorder={"0"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={`${styles.getstartedright} ${styles.getstarted}`}>
        <p>
          ready to <br />
          get started
        </p>
        <div className={styles.arrowimg}>
          <img src="/img/boldarrow.png" alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;
