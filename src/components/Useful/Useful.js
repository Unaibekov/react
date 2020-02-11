import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styles from '../Useful/Useful.module.css'
import Cls from '../../assets/images/close.svg'
import { useSelector } from "react-redux";

export const Useful = () => {
  const usefulSlider = useSelector(state => state.usefulSlider);

  const [nav, setNav] = useState(null)
  const slider = useRef()

  useEffect(() => {
    setNav(slider.current)
  }, [])

  // const svg = {
  //   prev: 'M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z',
  //   next: 'M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z',
  // }

  const settings = {
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // slickNext: false,
    // slickPrev: false,
    nextArrow: <Cls />,
    prevArrow: <Cls />,

  };
  return (
    <div>
      <div className={`${styles.heading} d-flex justify-content-betveen align-items-center`}>
        <div>Заголовок</div>
        {/* <div className="d-flex">
          <svg viewBox="0 0 492 492"

            className={styles.prev}
            onClick={this.previous}
          >
            <path d={svg['prev']} />
            <linearGradient id="my-cool-gradient" x2="1" y2="1">
              <stop offset="0%" stop-color="#447799" />
              <stop offset="50%" stop-color="#224488" />
              <stop offset="100%" stop-color="#112266" />
            </linearGradient>
          </svg>
          <svg viewBox="0 0 492 492"
            className={styles.next}
            onClick={this.next}
          >
            <path d={svg['next']} />
          </svg>
        </div> */}
      </div>

      <Slider asNavFor={nav} ref={c => (slider.current = c)} {...settings} className={styles.slide}>
        {usefulSlider.map(i => {
          return (
            <div key={i.key}>
              <div className={styles.slideContent}>
                <img src={i.image} alt='htmlLogo' className={styles.logo} />
                <div>
                  <div className={styles.title}>{i.title}</div>
                  <div className={styles.subtitle}>{i.subtitle}</div>
                  <div className={styles.subtitle_second}>{i.subtitle_second}</div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
}