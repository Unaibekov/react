import React from 'react';
import styles from '../Partners/Partners.module.css'
import { useSelector } from 'react-redux';

export const Partners = () => {
  const partners = useSelector(state => state.partners);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTrack}>
        {partners.map(i => {
          return (
            <div className={styles.carouselSlide}>
              <img src={i.image} height="100" alt="partners" />
            </div>
          )
        })}
      </div>
    </div>
  )
}