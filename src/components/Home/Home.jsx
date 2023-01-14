import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.scss";

const Home = () => {
  let sliderItems = [
    {
      img: "https://tuborjan.github.io/designer/img/person1.png",
    },
    {
      img: "https://tuborjan.github.io/designer/img/person2.png",
    },
    {
      img: "https://tuborjan.github.io/designer/img/person3.png",
    },
  ];

  const slider = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section className={`container ${styles.home}`}>
      <div className={styles.logo}>
        <div className={styles.UI}>
          UI <span className={styles.dot}>.</span>
        </div>
        <div className={styles.inlineElements}>
          <div className={styles.begginers}>
            beginner'<span className={styles.lowercase}>s</span>
          </div>
          <div className={styles.slogan}>
            <span className={styles.shape}></span>
            <p>
              become a <br /> pro-designer
            </p>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.sliderBackround}></div>
        <div className={styles.items}>
          <Slider ref={slider} {...sliderSettings}>
            {sliderItems.map((item, index) => (
              <div className={styles.item} key={index}>
                <img src={`${item.img}`} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <img
          className={styles.prewArrow}
          onClick={() => slider?.current?.slickPrev()}
          src="https://tuborjan.github.io/designer/img/arrow.png"
          alt="prew arrow"
        />
        <img
          className={styles.nexArrow}
          onClick={() => slider?.current?.slickNext()}
          src="https://tuborjan.github.io/designer/img/arrow.png"
          alt="next arrow"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.edition}>
          <span>edition</span> <br />
          2022
        </div>
        <div className={styles.description}>
          <h1>Start guide for beginner designers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore .
          </p>
        </div>
        <div className={styles.buttons}>
          <button>let's start</button>
          <button>read more</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
