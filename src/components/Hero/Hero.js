import React from 'react';
import styles from '../Hero/Hero.module.css';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';

export const Hero = () => {
  const svgs = useSelector(state => state.svgs)
  
  return (
    <div className={styles.main}>
      <Link
        activeClass={styles.active}
        to="Lessons"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <svg
          width="26" height="40" viewBox="0 0 26 40"
          className={styles.down}
        >
          <path d={svgs.scrollDown} />
        </svg>
      </Link>
      <div className={styles.title}>Учиться,<br />учиться<br />и еще раз<br />УЧИТЬСЯ!!!</div>
    </div>
  )
}