import React from 'react';
import styles from '../Order/Order.module.css';
import { useSelector } from 'react-redux';

export const Order = () => {
  const svgs = useSelector(state => state.svgs)

  return (
    <div className={styles.order}>
      <div className={styles.orderVisible}>
        <div className={styles.orderRotated}>
          <div className={styles.orderContainer}>
            <input className={styles.input} type="text" placeholder="Введите Email"/> 
            <div className={styles.title}>Записаться</div>
          </div>          
        </div>
        <div className={styles.orderContainer}>
          <div className={styles.title}>Записаться на обучение</div>
          <svg
            width="100" height="100" viewBox="0 0 492 492"
            className={styles.arrowRight}>
            <path d={svgs.arrowRight} />
          </svg>
        </div>
      </div>
    </div>
  )
}