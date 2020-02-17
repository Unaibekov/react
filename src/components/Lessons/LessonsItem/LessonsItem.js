import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LessonsItem/LessonItems.module.css';

export const LessonsItem = (props) => {

  return (
    <Link className={styles.item} to={props.path}>
      <i className={styles.line}></i>
      <img style={{height:'auto',width:'100%'}} className="img-responsive" src={props.image} alt='LessonsImage' />
      <div className={styles.overlay}></div>
      <div className={styles.title}>{props.title}</div>
      <svg className={styles.icon} viewbox="0 0 28 25">
        <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
      </svg>
    </Link>
    // <Link className={styles.item} to={props.path}>
    //   <i className={styles.line}></i>
    //   <img style={{height:'auto',width:'100%'}} className="img-responsive" src={props.image} alt='LessonsImage' />
    //   <div className={styles.overlay}></div>
    //   <div className={styles.title}>{props.title}</div>
    //   <svg className={styles.icon} viewbox="0 0 28 25">
    //     <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
    //   </svg>
    // </Link>
  )
}