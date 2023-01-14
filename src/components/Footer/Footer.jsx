import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footercontent}`}>
        <div className={styles.about}>
          <h2>About</h2>
          <ul>
            <li>
              <a href="/">History</a>
            </li>
            <li>
              <a href="/">Our Team</a>
            </li>
            <li>
              <a href="/">Mission Statement</a>
            </li>
            <li>
              <a href="/">Terms & Condition</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className={styles.whatwedo}>
          <h2>What we do</h2>
          <ul>
            <li>
              <a href="/">News and stories</a>
            </li>
            <li>
              <a href="/">Publications</a>
            </li>
            <li>
              <a href="/">Take action</a>
            </li>
            <li>
              <a href="/">Recomendations</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
          </ul>
        </div>
        <div className={styles.singup}>
          <h2>Sign Up To Receive Our Newsletter</h2>
          <input type="email" />
          <div className={styles.socials}>
            <p>Follow us!</p>
            <div className={styles.socialsimg}>
              <img
                src="https://tuborjan.github.io/designer/img/facebook.png"
                alt="facebook"
              />
            </div>
            <div className={styles.socialsimg}>
              <img
                src="https://tuborjan.github.io/designer/img/instagramm.png"
                alt="instagramm"
              />
            </div>
            <div className={styles.socialsimg}>
              <img
                src="https://tuborjan.github.io/designer/img/youtube.png"
                alt="youtube"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
