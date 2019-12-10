import React from 'react';
import styles from '../Lessons/Lessons.module.css';
import htmlBg from '../../assets/images/htmlBg.jpg'
// import cssBg from '../../assets/images/cssBg.jpg'
// import reactBg from '../../assets/images/reactBg.png';
// import javaBg from '../../assets/images/javaBg.png'
import LessonsItem from './LessonsItem/LessonsItem';


export default function Lessons({ id }) {
    return (
        <div className={`${styles.dFlex} ${styles.flexWrap}`} id={id}>
            <LessonsItem
                title='React'
            />
            <LessonsItem 
                title='JavaScript'
            />
        </div>
        
    );
}