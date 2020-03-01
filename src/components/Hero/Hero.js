import React from 'react';
import styles from '../Hero/Hero.module.css';
import logo from '../../assets/images/logo.svg'

export const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.down}><span></span></div>
      <img src={logo} className={styles.logo} alt='logo' />
    </div>
  )
}