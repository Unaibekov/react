import React from 'react'; 
import styles from '../ReactLess/ReactLess.module.css'; 
import { Link } from 'react-router-dom';


export const ReactLess = () => {
    return (
        <div className={styles.bg}>
            <Link className={styles.back} to='/'></Link>
        </div>
    )
}