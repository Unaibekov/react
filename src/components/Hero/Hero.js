import React from 'react';
import styles from '../Hero/Hero.module.css';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.svg'

export const Hero = () => {
  const svgs = useSelector(state => state.svgs)
  const scrollToTop = () => {
    window.scrollTo({
      top: 500,
      behavior: 'smooth'
    });
  }
  
  return (
    <div className={styles.main}>
        <svg
          width="26" height="40" viewBox="0 0 26 40"
          className={styles.down}
          onClick={() => scrollToTop()}
        >
          <path d={svgs.scrollDown} />
        </svg>
      {/* <div className={styles.title}>Учиться,<br />учиться<br />и еще раз<br />УЧИТЬСЯ!!!</div> */}
      <img src={logo} className={styles.logo} alt='logo' />
    </div>
  )
}