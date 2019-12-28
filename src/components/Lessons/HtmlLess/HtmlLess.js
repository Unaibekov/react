import React from 'react'; 
import styles from '../HtmlLess/HtmlLess.module.css'; 
import { Link } from 'react-router-dom';

const HtmlLess = () => {
    return (
        <div className={styles.bg}>
            <Link className={styles.back} to='/'></Link>
        </div>
    )
}

export default HtmlLess;