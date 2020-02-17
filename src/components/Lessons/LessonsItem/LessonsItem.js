import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LessonsItem/LessonItems.module.css';

export const LessonsItem = (props) => {

  return (
    <Link className={styles.item} to={props.path}>
      <img src={props.image} alt='LessonsImage' />
      <div className={styles.title}>{props.title}</div>
      <i className={styles.line}></i>
    </Link>
  )
}