import React from "react";
import Slider from "react-slick";
import styles from '../Technology/Technology.module.css'
import htmlLogo from '../../assets/images/html.png'
import cssLogo from '../../assets/images/CSS3.png'
import jsLogo from '../../assets/images/js.png'
import rjsLogo from '../../assets/images/reactjs.png'
import reduxLogo from '../../assets/images/redux.png'

export const Technology = () => {
  const next = () => {
    this.slider.slickNext();
  }
  const previous = () => {
    this.slider.slickPrev();
  }
  const svg = {
    prev: 'M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z',
    next: 'M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z',
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickNext: true,
    slickPrev: true

  };

  return (
    <div>
      <div className={`${styles.heading} d-flex justify-content-betveen align-items-center`}>
        <div>Заголовок</div>
        <div className="d-flex">
          <svg viewBox="0 0 492 492"

            className={styles.prev}
            onClick={previous}>
            <path d={svg['prev']} />
            <linearGradient id="my-cool-gradient" x2="1" y2="1">
              <stop offset="0%" stop-color="#447799" />
              <stop offset="50%" stop-color="#224488" />
              <stop offset="100%" stop-color="#112266" />
            </linearGradient>
          </svg>
          <svg viewBox="0 0 492 492"
            className={styles.next}
            onClick={next}>
            <path d={svg['next']} />
          </svg>
        </div>
      </div>
      <Slider ref={c => (this.slider = c)} {...settings} className={styles.slide}>
        <div key={1}>
          <div className={styles.slideContent}>
            <img src={htmlLogo} alt='htmlLogo' className={styles.logo} />
            <div>
              <div className={styles.title}>HTML</div>
              <div className={styles.subtitle}>Cтандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML. Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства.</div>
            </div>
          </div>
        </div>
        <div key={2}>
          <div className={styles.slideContent}>
            <img src={cssLogo} alt='htmlLogo' className={styles.logo} />
            <div>
              <div className={styles.title}>CSS</div>
              <div className={styles.subtitle}>Формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.</div>
            </div>
          </div>
        </div>
        <div key={3}>
          <div className={styles.slideContent}>
            <img src={jsLogo} alt='htmlLogo' className={styles.logo} />
            <div>
              <div className={styles.title}>JAVASCRIPT</div>
              <div className={styles.subtitle}>мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.</div>
            </div>
          </div>
        </div>
        <div key={4}>
          <div className={styles.slideContent}>
            <img src={rjsLogo} alt='htmlLogo' className={styles.logo} />
            <div>
              <div className={styles.title}>reactjs</div>
              <div className={styles.subtitle}>JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.</div>
            </div>
          </div>
        </div>
        <div key={5}>
          <div className={styles.slideContent}>
            <img src={reduxLogo} alt='htmlLogo' className={styles.logo} />
            <div>
              <div className={styles.title}>redux</div>
              <div className={styles.subtitle}>Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.</div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}