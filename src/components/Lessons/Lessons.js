import React from 'react';
import styles from '../Lessons/Lessons.module.css';
import htmlBg from '../../assets/images/htmlBg.jpg'
import cssBg from '../../assets/images/cssBg.jpg'
import reactBg from '../../assets/images/reactBg.png';
import javaBg from '../../assets/images/javaBg.png'


export default function Lessons({ id }) {
    return (
        <div className={`${styles.dFlex} ${styles.flexWrap}`} id={id}>
            <div className={styles.item}>
                <i className={styles.line}></i>
                <img src={htmlBg} alt='htmlBg' />
                <div className={styles.overlay}></div>
                <div className={styles.title}>HTML</div>
                <svg className={styles.icon} viewbox="0 0 28 25">
                    <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
                </svg>
            </div>
            <div className={styles.item}>
                <i className={styles.line}></i>
                <img src={cssBg} alt='cssBg' />
                <div className={styles.overlay}></div>
                <div className={styles.title}>CSS</div>
                <svg className={styles.icon} viewbox="0 0 28 25">
                    <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
                </svg>
            </div>
            <div className={styles.item}>
                <i className={styles.line}></i>
                <img src={javaBg} alt='javaBg' />
                <div className={styles.overlay}></div>
                <div className={styles.title}>JavaScript</div>
                <svg className={styles.icon} viewbox="0 0 28 25">
                    <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
                </svg>
            </div>
            <div className={styles.item}>
                <i className={styles.line}></i>
                <img src={reactBg} alt='reactBg' />
                <div className={styles.overlay}></div>
                <div className={styles.title}>React</div>
                <svg className={styles.icon} viewbox="0 0 28 25">
                    <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
                </svg>
            </div>
            <div className={styles.item}>
                <i className={styles.line}></i>
                <img src={htmlBg} alt='htmlBg' />
                <div className={styles.overlay}></div>
                <div className={styles.title}>HTML</div>
                <svg className={styles.icon} viewbox="0 0 28 25">
                    <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
                </svg>
            </div>
            <div className={styles.item}>
                <i className={styles.line}></i>
                <img src={cssBg} alt='cssBg' />
                <div className={styles.overlay}></div>
                <div className={styles.title}>CSS</div>
                <svg className={styles.icon} viewbox="0 0 28 25">
                    <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
                </svg>
            </div>
            <div className={styles.item}>
                <i className={styles.line}></i>
                <img src={javaBg} alt='javaBg' />
                <div className={styles.overlay}></div>
                <div className={styles.title}>JavaScript</div>
                <svg className={styles.icon} viewbox="0 0 28 25">
                    <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
                </svg>
            </div>
            <div className={styles.item}>
                <i className={styles.line}></i>
                <img src={reactBg} alt='reactBg' />
                <div className={styles.overlay}></div>
                <div className={styles.title}>React</div>
                <svg className={styles.icon} viewbox="0 0 28 25">
                    <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
                </svg>
            </div>  
        </div>
        
    );
}