import React from 'react'; 
import styles from '../CssLess/CssLess.module.css'; 
import { Link } from 'react-router-dom';


const CssLess = () => {
    return (
        <div className={styles.bg}>
            <Link className={styles.back} to='/'></Link>
        </div>
    )
}

export default CssLess;