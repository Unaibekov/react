import React from 'react'; 

import styles from '../LessonsItem/LessonItems.module.css'; 

const LessonsItem=(props) => {
    return (
        <div className={styles.item}>
            <i className={styles.line}></i>
            <img src={props.image} alt='htmlBg' />
            <div className={styles.overlay}></div>
            <div className={styles.title}>{props.title}</div>
            <svg className={styles.icon} viewbox="0 0 28 25">
                <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
            </svg>
        </div>
    )
}

export default LessonsItem;