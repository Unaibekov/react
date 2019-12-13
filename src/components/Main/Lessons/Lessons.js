import React from 'react';
import styles from '../Lessons/Lessons.module.css';
import htmlBg from '../../../assets/images/htmlBg.jpg';
import cssBg from '../../../assets/images/cssBg.jpg';
import reactBg from '../../../assets/images/reactBg.png';
import javaBg from '../../../assets/images/javaBg.png';
import LessonsItem from './LessonsItem/LessonsItem';

export default function Lessons({ id }) {

  let lessonsData = [
    { id:1, title: 'HTML', image: htmlBg, path: 'htmlless' },
    { id:2, title: 'CSS', image: cssBg, path: 'cssless' },
    { id:3, title: 'JavaScript', image: javaBg, path: 'javaless' },
    { id:4, title: 'React', image: reactBg, path: 'reactless' }
  ]

  let lessonsElement = lessonsData
    .map(lessons => <LessonsItem image={lessons.image} title={lessons.title} path={lessons.path} />)

  return (
    <div className={`${styles.dFlex} ${styles.flexWrap}`} id={id}>
      { lessonsElement }
    </div>
  );
};