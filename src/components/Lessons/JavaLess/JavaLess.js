import React from 'react';
import styles from '../JavaLess/JavaLess.module.css';
import { Link } from 'react-router-dom';


export const JavaLess = () => {
    return (
        <div className={styles.bg}>
            <Link className={styles.back} to='/'></Link>
        </div>
    )
}