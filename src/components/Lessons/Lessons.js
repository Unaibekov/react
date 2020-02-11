import React from 'react';
import styles from '../Lessons/Lessons.module.css';
import { useSelector } from 'react-redux';
import { LessonsItem } from './LessonsItem/LessonsItem';

export const Lessons = ({id}) => {
  const links = useSelector(state => state.links);
  
  return (
    <div className={`${styles.dFlex} ${styles.flexWrap}`} id={id}>
      {links.map(i => {
        return <LessonsItem image={i.image} title={i.title} path={i.path} />;
      })}
    </div>
  );
}