import React from "react";
import styles from "./Feedback.module.scss";

const Feedback = () => {
  return (
    <section className={styles.feedback}>
      <div className={styles.mainimg}>
        <img src="/img/FeedbackImg.png" alt="person" />
      </div>
      <div className={styles.feedbackform}>
        <h2>Subscribe</h2>
        <span>to our newsletter</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt .
        </p>

        <div className={styles.form}>
          <form action="">
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="MAIL" />
            <textarea rows={6} placeholder="MESSAGE" />
          </form>
        </div>

        <button>send message</button>
      </div>
    </section>
  );
};

export default Feedback;
