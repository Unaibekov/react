import React from 'react';
import styles from '../Lessons/Lessons.module.css';
import {useSelector} from 'react-redux';
import LessonsItem from './LessonsItem/LessonsItem';

export const Lessons = ({id}) => {
  const links = useSelector(state => state.links);
  return (
    <div className={`${styles.dFlex} ${styles.flexWrap}`}>
      {links.map(link => {
        return <LessonsItem id="lessons" image={link.image} title={link.title} path={link.path} />;
      })}
    </div>
  );
}