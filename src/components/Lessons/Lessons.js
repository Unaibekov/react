import React from 'react';
import styles from '../Lessons/Lessons.module.css';
import { useSelector } from 'react-redux';
import { LessonsItem } from './LessonsItem/LessonsItem';

export const Lessons = ({ id }) => {
  const links = useSelector(state => state.links);

  return (
    <div className={styles.lessons}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Наши услуги</div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.flexWrap} id={id}>
        {links.map(i => {
          return <LessonsItem image={i.image} title={i.title} path={i.path} />;
        })}
      </div>
    </div>
  );
}