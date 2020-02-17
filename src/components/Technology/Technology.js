import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styles from '../Technology/Technology.module.css'
import Cls from '../../assets/images/close.svg'
import { useSelector } from "react-redux";

export const Technology = () => {
  const technologySlider = useSelector(state => state.technologySlider);

  const [nav, setNav] = useState(null)
  const slider = useRef()

  useEffect(() => {
    setNav(slider.current)
  }, [])

  const settings = {
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    // slickNext: false,
    // slickPrev: false,
    nextArrow: <Cls />,
    prevArrow: <Cls />,

  };
  return (
    <div className={styles.technology}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Наши технологии</div>
        <div className={styles.divider}></div>
      </div>
      <Slider asNavFor={nav} ref={c => (slider.current = c)} {...settings} className={styles.slide}>
        {technologySlider.map(i => {
          return (
            <div key={i.key}>
              <div className={styles.slideContent}>
                <img src={i.image} alt='' className={styles.logo} />
                <div>
                  <div className={styles.title} dangerouslySetInnerHTML={{ __html: i.title }}></div>
                  <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: i.subtitle }}></div>
                  <div className={styles.subtitle_second} dangerouslySetInnerHTML={{ __html: i.subtitle_second }}></div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
}