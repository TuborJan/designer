import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  let sliderItems = [
    {
      name: "Laura Smith",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
      img: "https://tuborjan.github.io/designer/img/Image1.png",
    },
    {
      name: "Jhon Smith",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
      img: "https://tuborjan.github.io/designer/img/Image2.png",
    },
    {
      name: "Sara smith",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
      img: "https://tuborjan.github.io/designer/img/Image3.png",
    },
    {
      name: "Adam Smith",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
      img: "https://tuborjan.github.io/designer/img/Image2.png",
    },
    {
      name: "Kara Smith",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://tuborjan.github.io/designer/img/Image1.png",
    },
  ];

  const slider = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={`container ${styles.reviews}`} id="blog">
      <div className={styles.header}>
        <h2>
          what
          <span>users think</span>
        </h2>
      </div>
      <div className={styles.reviewsslider}>
        <Slider ref={slider} {...sliderSettings}>
          {sliderItems.map((item, index) => (
            <div className={styles.review} key={index}>
              <img className={styles.avatar} src={`${item.img}`} alt="avatar" />
              <h3 className={styles.name}>{item.name}</h3>
              <div className={styles.score}>
                <img
                  src="https://tuborjan.github.io/designer/img/fullstar.png"
                  alt="full star"
                  className={styles.fullstar}
                />
                <img
                  src="https://tuborjan.github.io/designer/img/fullstar.png"
                  alt="full star"
                  className={styles.fullstar}
                />
                <img
                  src="https://tuborjan.github.io/designer/img/fullstar.png"
                  alt="full star"
                  className={styles.fullstar}
                />
                <img
                  src="https://tuborjan.github.io/designer/img/fullstar.png"
                  alt="full star"
                  className={styles.fullstar}
                />
                <img
                  src="https://tuborjan.github.io/designer/img/emptystar.png"
                  alt="empty star"
                />
              </div>
              <div className={styles.text}>
                <img
                  src="https://tuborjan.github.io/designer/img/Quote1.png"
                  alt="qoute"
                />
                <p>{item.review}</p>
                <img
                  src="https://tuborjan.github.io/designer/img/Quote2.png"
                  alt="qoute"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.arrows}>
          <img
            className={styles.prewArrow}
            onClick={() => slider?.current?.slickPrev()}
            src="https://tuborjan.github.io/designer/img/boldarrow.png"
            alt="prew arrow"
          />
          <img
            className={styles.nexArrow}
            onClick={() => slider?.current?.slickNext()}
            src="https://tuborjan.github.io/designer/img/boldarrow.png"
            alt="next arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
